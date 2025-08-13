import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email?: string
  phone: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()

    // Basic validation
    if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // If SMTP is configured, send email
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransporter({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        const emailContent = `
New contact form submission from EyeKhel website:

FROM: ${formData.name}
EMAIL: ${formData.email || 'Not provided'}
PHONE: ${formData.phone}
SUBJECT: ${formData.subject}

MESSAGE:
${formData.message}

---
Submitted: ${new Date().toLocaleString()}
        `.trim()

        await transporter.sendMail({
          from: {
            name: 'EyeKhel Website',
            address: process.env.SMTP_USER,
          },
          to: 'support@eyekhel.com',
          subject: `Contact Form: ${formData.subject}`,
          text: emailContent,
        })

        // If customer provided email, send confirmation
        if (formData.email) {
          await transporter.sendMail({
            from: {
              name: 'EyeKhel Support',
              address: process.env.SMTP_USER,
            },
            to: formData.email,
            subject: 'Message Received - EyeKhel Support',
            text: `
Dear ${formData.name},

Thank you for contacting EyeKhel! We've received your message and will get back to you within 24 hours.

Your Message:
Subject: ${formData.subject}
${formData.message}

If you need immediate assistance, you can also reach us at:
Phone/WhatsApp: +855 12 345 678

Best regards,
The EyeKhel Support Team
            `.trim(),
          })
        }

      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the request if email fails
      }
    }

    // In a real application, you might also save to a database
    console.log('Contact form submission:', formData)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
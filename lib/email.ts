import nodemailer from 'nodemailer'
import { CheckoutFormData } from './validation'
import { CartItem } from './cart-store'
import { formatPrice } from './utils'

interface OrderData extends CheckoutFormData {
  items: CartItem[]
  total: number
  orderDate: string
  orderId: string
}

// Create transporter - will only work if SMTP environment variables are set
function createTransporter() {
  if (!process.env.SMTP_HOST) {
    throw new Error('SMTP configuration not available')
  }

  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendOrderConfirmation(orderData: OrderData) {
  const transporter = createTransporter()

  const orderItems = orderData.items
    .map(
      (item) =>
        `• ${item.frame.name} × ${item.quantity} - ${formatPrice(
          item.frame.price * item.quantity
        )}`
    )
    .join('\n')

  const emailContent = `
Dear ${orderData.name},

Thank you for your order with EyeKhel! We've received your order and will contact you within 24 hours to confirm details and arrange delivery.

ORDER DETAILS
Order #: ${orderData.orderId}
Order Date: ${new Date(orderData.orderDate).toLocaleDateString()}

ITEMS ORDERED:
${orderItems}

TOTAL: ${formatPrice(orderData.total)}

DELIVERY ADDRESS:
${orderData.address}
${orderData.city}, ${orderData.province}
${orderData.postalCode || ''}

CONTACT INFORMATION:
Phone: ${orderData.phone}
Email: ${orderData.email || 'Not provided'}

${orderData.notes ? `SPECIAL INSTRUCTIONS:\n${orderData.notes}\n` : ''}

WHAT HAPPENS NEXT?
1. We'll contact you within 24 hours to confirm your order
2. Your glasses will be carefully packaged and shipped
3. You'll receive tracking information once shipped
4. Delivery typically takes 2-3 business days in Phnom Penh, 3-5 days elsewhere

QUESTIONS?
Phone/WhatsApp: +855 12 345 678
Email: orders@eyekhel.com

Thank you for choosing EyeKhel to protect your eyes!

Best regards,
The EyeKhel Team

---
This is an automated email. Please do not reply directly to this message.
For support, contact us at support@eyekhel.com
  `.trim()

  const mailOptions = {
    from: {
      name: 'EyeKhel',
      address: process.env.SMTP_USER || 'orders@eyekhel.com',
    },
    to: orderData.email,
    subject: `Order Confirmation - EyeKhel #${orderData.orderId}`,
    text: emailContent,
  }

  await transporter.sendMail(mailOptions)

  // Also send internal notification
  const internalMailOptions = {
    from: {
      name: 'EyeKhel Website',
      address: process.env.SMTP_USER || 'noreply@eyekhel.com',
    },
    to: 'orders@eyekhel.com',
    subject: `New Order - ${orderData.orderId}`,
    text: `
New order received:

${emailContent}

Remember to contact the customer within 24 hours!
    `.trim(),
  }

  await transporter.sendMail(internalMailOptions)
}
import { NextRequest, NextResponse } from 'next/server'
import { sendOrderConfirmation } from '@/lib/email'
import { CheckoutFormData } from '@/lib/validation'
import { CartItem } from '@/lib/cart-store'

interface OrderData extends CheckoutFormData {
  items: CartItem[]
  total: number
  orderDate: string
  orderId: string
}

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderData = await request.json()

    // In a real application, you would:
    // 1. Validate the order data
    // 2. Save to database
    // 3. Process payment
    // 4. Send confirmation email
    
    // For now, we'll simulate saving the order
    console.log('Order received:', orderData)

    // Try to send email confirmation
    let emailSent = false
    if (orderData.email && process.env.SMTP_HOST) {
      try {
        await sendOrderConfirmation(orderData)
        emailSent = true
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't fail the order if email fails
      }
    }

    // In a real app, save order to database or file system
    // For demo purposes, we'll just simulate success
    
    return NextResponse.json({
      success: true,
      orderId: orderData.orderId,
      emailSent,
      message: 'Order placed successfully'
    })

  } catch (error) {
    console.error('Order processing error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process order' 
      },
      { status: 500 }
    )
  }
}
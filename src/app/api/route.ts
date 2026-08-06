import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 },
      )
    }

    // In production, you would send an email, store in database, or send to a CRM.
    // For now, we log and return success.
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: 'Thank you for your message. We will get back to you shortly.' })
  } catch {
    return NextResponse.json({ error: 'Failed to process your message.' }, { status: 500 })
  }
}

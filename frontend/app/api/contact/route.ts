import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { company_name, contact_name, email, phone, role_department, inquiry_type, message } = body

    // For now, just return success without Supabase
    // TODO: Implement email sending or Supabase storage when configured
    console.log('Contact form submission:', { company_name, contact_name, email, phone, role_department, inquiry_type, message })

    return NextResponse.json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
}
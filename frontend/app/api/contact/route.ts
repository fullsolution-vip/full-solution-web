import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { company_name, contact_name, email, phone, role_department, inquiry_type, message } = body

    // Save to Supabase (assuming a 'contacts' table)
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          company_name,
          contact_name,
          email,
          phone,
          role_department,
          inquiry_type,
          message,
          created_at: new Date().toISOString()
        }
      ])

    if (error) throw error

    // TODO: Send email using configured service
    // For now, just return success

    return NextResponse.json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
}
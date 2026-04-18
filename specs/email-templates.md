# Email Templates & Contact Workflow

## Purpose
This document defines the contact page workflow, the email routing model, and sample templates for B2B inquiries, internal notifications, and admin alerts.

## Contact Page Workflow
1. Public visitor or business user submits the contact form.
2. The form data is validated on the client.
3. Submission is sent to the email service and optionally persisted in Supabase or a backend table.
4. The target business inbox receives the inquiry.
5. Internal staff may receive a notification and respond through the internal dashboard or support workflow.

## Required Contact Form Fields
- Company name
- Contact name
- Email address
- Phone number (optional)
- Business role or department
- Inquiry type (e.g. product interest, partnership, pricing, general inquiry)
- Message / details
- Consent checkbox for marketing or follow-up communications

## Email Configuration
### Environment variables
- `EMAIL_SERVICE_PROVIDER` — provider name such as SendGrid, Mailgun, SMTP
- `EMAIL_FROM_ADDRESS` — sender address used for outgoing notifications
- `EMAIL_TO_ADDRESS` — business inbox address for incoming lead notifications
- `EMAIL_API_KEY` — API key for the email provider
- `EMAIL_SMTP_HOST`, `EMAIL_SMTP_PORT`, `EMAIL_SMTP_USER`, `EMAIL_SMTP_PASSWORD` — optional SMTP settings

### Backend options
- Use Supabase functions or serverless routes for email sending from the frontend
- Optional Python Flask backend can use the same env values to send emails and manage templates centrally
- Keep email sending logic secure by avoiding client-side use of secret keys

## Email Template: Business Inquiry
### Subject
`New business inquiry from {{ company_name }} – {{ inquiry_type }}`

### Body (HTML / plain text)
```
Hello Full Solution Team,

You have received a new inquiry from the website contact page.

Company: {{ company_name }}
Name: {{ contact_name }}
Email: {{ contact_email }}
Phone: {{ contact_phone }}
Role/Department: {{ role_department }}
Inquiry Type: {{ inquiry_type }}
Message:
{{ message }}

Website: fullsolution.vip

Please follow up with this lead within 24 hours.

Best regards,
Full Solution Contact System
```

## Email Template: Internal Notification
### Subject
`[Internal] New lead submitted via website contact form`

### Body
```
A new lead has been submitted.

Lead details:
- Company: {{ company_name }}
- Contact: {{ contact_name }}
- Email: {{ contact_email }}
- Role: {{ role_department }}
- Inquiry type: {{ inquiry_type }}
- Message: {{ message }}

Assign this lead to an internal staff member or add it to the lead pipeline.
```

## Email Template: Confirmation to Visitor
### Subject
`Thank you for contacting Full Solution`

### Body
```
Hi {{ contact_name }},

Thank you for reaching out to Full Solution.
We have received your message and our team will contact you shortly.

If you included your company details, we will route your inquiry to the best internal specialist.

Best,
Full Solution Team
```

## Notes
- Store the email flow definitions in `specs/email-templates.md` to keep template changes in sync with implementation.
- If using Supabase or a backend email API, map the template variables from form data before sending.
- For local dev, consider using a mail preview tool or console logger instead of actual delivery.
- Ensure the contact page remains functional even when email provider credentials are missing by showing a friendly maintenance message.

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type QuoteData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  businessType: string;
  quantityRange: string;
};

// Validate required environment variables
const validateEnvVars = () => {
  const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing email configuration: ${missing.join(', ')}. ` +
      'Please set these in .env.local file. See .env.local.example for reference.'
    );
  }
};

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(req: Request) {
  try {
    // Validate environment variables first
    validateEnvVars();
    
    const transporter = createTransporter();
    
    const body = await req.json();
    const data: QuoteData = body;

    // Compose company email
    const companyHtml = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Business Type:</strong> ${data.businessType}</p>
      <p><strong>Quantity Range:</strong> ${data.quantityRange}</p>
    `;

    // Send email to company
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL || 'info@blackfoxphones.com',
      subject: `Quote Request from ${data.name} — ${data.company}`,
      html: companyHtml,
    });

    // Send confirmation to user
    const userHtml = `
      <h2>Thanks for your request, ${data.name}!</h2>
      <p>We received your quote request and our team will contact you shortly.</p>
      <p><strong>Summary:</strong></p>
      <ul>
        <li>Company: ${data.company}</li>
        <li>Phone: ${data.phone}</li>
        <li>Business Type: ${data.businessType}</li>
        <li>Quantity Range: ${data.quantityRange}</li>
      </ul>
      <p>If you need urgent assistance, email us at ${process.env.COMPANY_EMAIL || 'info@blackfoxphones.com'}.</p>
    `;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: data.email,
      subject: 'We received your quote request',
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error sending quote emails:', errorMessage);
    
    // Check if it's a configuration error
    if (errorMessage.includes('Missing email configuration')) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service not configured. Please contact support.' 
        },
        { status: 503 }
      );
    }
    
    // Otherwise, it's a runtime error (SMTP connection, etc)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send request. Please try again later or contact support directly.' 
      },
      { status: 500 }
    );
  }
}

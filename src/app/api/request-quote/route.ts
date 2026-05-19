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
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h2 { color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
            .details { margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: bold; color: #333; }
            .detail-value { color: #666; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #d4af37; text-align: center; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>📋 New Quote Request Received</h2>
            <div class="details">
              <div class="detail-row">
                <span class="detail-label">Client Name:</span>
                <span class="detail-value">${data.name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value">${data.email}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Company:</span>
                <span class="detail-value">${data.company}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${data.phone}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Business Type:</span>
                <span class="detail-value">${data.businessType}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Quantity Range:</span>
                <span class="detail-value">${data.quantityRange}</span>
              </div>
            </div>
            <div class="footer">
              <p>Blackfox Phones Trading LLC | Wholesale Division</p>
              <p>Please respond to this quote request within 24 hours</p>
            </div>
          </div>
        </body>
      </html>
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
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h2 { color: #d4af37; }
            .success-badge { display: inline-block; background: #4caf50; color: white; padding: 8px 16px; border-radius: 4px; margin-bottom: 20px; }
            .summary { background: #f9f9f9; padding: 20px; border-radius: 6px; margin: 20px 0; }
            .summary-title { font-weight: bold; color: #333; margin-bottom: 15px; }
            .summary-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .summary-label { font-weight: 600; color: #333; }
            .summary-value { color: #666; }
            .contact-section { background: #fffbf0; padding: 20px; border-left: 4px solid #d4af37; margin: 20px 0; }
            .contact-section p { margin: 10px 0; }
            .footer { margin-top: 30px; padding-top: 20px; text-align: center; font-size: 12px; color: #999; border-top: 2px solid #d4af37; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Thank You for Your Quote Request! 🎉</h2>
            <div class="success-badge">✓ Request Received</div>
            
            <p>Hello ${data.name},</p>
            <p>We've successfully received your wholesale quote request. Our team will review your details and contact you shortly with competitive pricing and terms tailored to your business needs.</p>
            
            <div class="summary">
              <div class="summary-title">Your Quote Summary:</div>
              <div class="summary-item">
                <span class="summary-label">Company:</span>
                <span class="summary-value">${data.company}</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Contact Phone:</span>
                <span class="summary-value">${data.phone}</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Business Type:</span>
                <span class="summary-value">${data.businessType}</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Quantity Range:</span>
                <span class="summary-value">${data.quantityRange} units</span>
              </div>
            </div>
            
            <div class="contact-section">
              <p><strong>Need urgent assistance?</strong></p>
              <p>Email: ${process.env.COMPANY_EMAIL || 'info@blackfoxphones.com'}</p>
              <p>Our sales team typically responds within 24 hours during business days.</p>
            </div>
            
            <p>We look forward to partnering with you!</p>
            
            <div class="footer">
              <p><strong>Blackfox Phones Trading LLC</strong></p>
              <p>Your Trusted Wholesale Partner</p>
            </div>
          </div>
        </body>
      </html>
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

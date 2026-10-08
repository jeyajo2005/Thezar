const nodemailer = require('nodemailer');
require('dotenv').config();

// Helper to create reliable Gmail SMTP transporter
const getTransporter = () => {
  const user = (process.env.EMAIL_USER || 'thezarevents@gmail.com').trim();
  const pass = (process.env.EMAIL_PASS || 'wpcknkfjgygtwwpr').replace(/\s+/g, '');

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// 1. Send OTP Email for SuperAdmin Registration / Login
const sendOtpEmail = async ({ email, otp, fullName = 'Administrator', purpose = 'SuperAdmin Registration' }) => {
  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #FAF7F2; padding: 30px; color: #2C1810;">
      <div style="max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #EAD8C7; box-shadow: 0 4px 20px rgba(107, 20, 20, 0.08);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #6B1414 0%, #8B1A1A 50%, #4A0A0A 100%); padding: 28px 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; color: #FAF7F2;">THEZAR EXECUTIVE PORTAL</h1>
          <p style="margin: 6px 0 0; font-size: 12px; color: #D4AF37; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;">
            One-Time Password (OTP) Verification
          </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 28px 24px;">
          <p style="font-size: 15px; margin: 0 0 12px; color: #2C1810;">Dear <strong>${fullName}</strong>,</p>
          <p style="font-size: 14px; line-height: 1.6; color: #5D4A4D; margin: 0 0 20px;">
            You have requested an OTP for <strong>${purpose}</strong> on TheZar Administrative Platform. Please use the verification code below to complete your authentication:
          </p>
          
          <!-- OTP Box -->
          <div style="background: #FDF4F4; border: 2px dashed #6B1414; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
            <span style="font-size: 32px; font-weight: 900; letter-spacing: 8px; color: #6B1414; font-family: monospace;">
              ${otp}
            </span>
            <p style="margin: 8px 0 0; font-size: 11px; color: #8C7A7C;">Valid for 10 minutes only. Do not share this code.</p>
          </div>

          <p style="font-size: 12px; color: #8C7A7C; line-height: 1.5; margin: 20px 0 0;">
            If you did not initiate this request, please disregard this email. Unauthorized access attempts to the administrative portal are logged and monitored.
          </p>
        </div>

        <!-- Footer -->
        <div style="background: #FAF7F2; padding: 16px; text-align: center; font-size: 11px; color: #8C7A7C; border-top: 1px solid #EAD8C7;">
          © 2026 THEZAR State Youth Championship. All rights reserved.
        </div>
      </div>
    </div>
  `;

  console.log(`\n========================================`);
  console.log(`[THEZAR AUTH OTP]: ${otp} for ${email}`);
  console.log(`========================================\n`);

  try {
    const transporter = getTransporter();
    const senderEmail = (process.env.EMAIL_USER || 'thezarevents@gmail.com').trim();

    const plainText = `Dear ${fullName},\n\nYour TheZar Verification Code is: ${otp}\n\nThis verification code is valid for 10 minutes.\n\n© 2026 THEZAR State Youth Championship.`;

    const info = await transporter.sendMail({
      from: `"Thezar Events" <${senderEmail}>`,
      replyTo: senderEmail,
      to: email,
      subject: `${otp} is your verification code for TheZar Portal`,
      text: plainText,
      html: htmlContent,
      priority: 'high',
      headers: {
        'X-Priority': '1 (Highest)',
        'X-MSMail-Priority': 'High',
        'Importance': 'High'
      }
    });
    console.log(`[Email] OTP email successfully sent to ${email} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[Email Error] Failed to send OTP email to ${email}:`, err.message);
    return { success: false, error: err.message };
  }
};

// 2. Send Registration Confirmation Email
const sendConfirmationEmail = async ({
  email,
  fullName,
  registrationId,
  participantId,
  password,
  selectedEvents,
  amount,
  paymentStatus
}) => {
  const eventTitles = selectedEvents.map((e) => e.title || e.name || e).join(', ');

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px; color: #1e293b;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: #6B1414; padding: 20px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px;">TheZar 2026 Registration Confirmed</h1>
          <p style="margin: 5px 0 0; font-size: 14px;">Statewide Tamil Nadu Championship League</p>
        </div>
        
        <div style="padding: 24px;">
          <p>Dear <strong>${fullName}</strong>,</p>
          <p>Thank you for registering with TheZar 2026! Here are your official registration details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #f1f5f9;">
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Registration ID:</td>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-family: monospace;">${registrationId}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Participant ID:</td>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-family: monospace; color: #6B1414;">${participantId}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Password:</td>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-family: monospace;">${password}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Registered Events:</td>
              <td style="padding: 10px; border: 1px solid #cbd5e1;">${eventTitles}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Total Amount:</td>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">₹${amount}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Payment Status:</td>
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: ${paymentStatus === 'free' ? '#16a34a' : '#d97706'};">
                ${paymentStatus === 'free' ? 'Completed (Free Event)' : 'Pending Verification'}
              </td>
            </tr>
          </table>

          <p style="font-size: 13px; color: #64748b;">
            Please keep your Participant ID and Password safe to log in on TheZar Mobile App.
          </p>
        </div>

        <div style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
          © 2026 TheZar Events. All rights reserved.
        </div>
      </div>
    </div>
  `;

  try {
    const transporter = getTransporter();
    const senderEmail = (process.env.EMAIL_USER || 'thezarevents@gmail.com').trim();

    await transporter.sendMail({
      from: `"Thezar_Events" <${senderEmail}>`,
      to: email,
      subject: `[TheZar 2026] Registration Confirmation - ${registrationId}`,
      html: htmlContent
    });
    console.log(`[Email] Confirmation sent to ${email}`);
  } catch (err) {
    console.error(`[Email Error] Failed to send email to ${email}:`, err.message);
  }
};

module.exports = { sendOtpEmail, sendConfirmationEmail };

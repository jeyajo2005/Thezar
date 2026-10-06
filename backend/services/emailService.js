const nodemailer = require('nodemailer');

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
  const eventTitles = Array.isArray(selectedEvents)
    ? selectedEvents.map((e) => (typeof e === 'object' ? (e.title || e.name || e.eventId) : e)).join(', ')
    : (selectedEvents || 'TheZar 2026 Pass');

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px; color: #1e293b;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: #9e0804; padding: 20px; text-align: center; color: #ffffff;">
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
              <td style="padding: 10px; border: 1px solid #cbd5e1; font-family: monospace; color: #9e0804;">${participantId}</td>
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

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: `"TheZar Events" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `[TheZar 2026] Registration Confirmation - ${registrationId}`,
        html: htmlContent
      });
      console.log(`[Email] Confirmation sent to ${email}`);
    } catch (err) {
      console.error(`[Email Error] Failed to send email to ${email}:`, err.message);
    }
  } else {
    console.log(`[Email Simulated] Email to ${email} for Registration ${registrationId}`);
  }
};

module.exports = { sendConfirmationEmail };

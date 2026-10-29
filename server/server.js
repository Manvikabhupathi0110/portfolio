import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// In-memory contact storage for verification and logging
const contactSubmissions = [];

// Nodemailer setup
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const recipientEmail = process.env.RECIPIENT_EMAIL || 'manvikabhupathi@gmail.com';

let mailTransporter = null;
if (emailUser && emailPass) {
  mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
  console.log(`[Email Transporter Configured] Ready to dispatch to: ${recipientEmail}`);
} else {
  console.log('[Email Transporter Note] EMAIL_USER / EMAIL_PASS not yet set in .env. Form submissions will be logged and preserved. To receive live Gmail notifications in your inbox, set EMAIL_USER & EMAIL_PASS in your environment.');
}

// API Endpoints
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    candidate: 'Manvika Bhupathi',
    service: 'Full-Stack Portfolio API',
    emailConfigured: !!mailTransporter
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (Name, Email, Message).'
    });
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const submission = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    subject: subject ? subject.trim() : 'Portfolio Inquiry',
    message: message.trim(),
    receivedAt: new Date().toISOString()
  };

  contactSubmissions.push(submission);
  console.log(`[Contact Form Received] From: ${submission.name} <${submission.email}> | Subject: ${submission.subject}`);

  // Send real email if transporter is configured
  let emailDispatched = false;
  if (mailTransporter) {
    try {
      await mailTransporter.sendMail({
        from: `"${submission.name}" <${emailUser}>`,
        replyTo: submission.email,
        to: recipientEmail,
        subject: `[Portfolio Contact] ${submission.subject} from ${submission.name}`,
        text: `Name: ${submission.name}\nEmail: ${submission.email}\nSubject: ${submission.subject}\n\nMessage:\n${submission.message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="background: linear-gradient(135deg, #2563eb, #9333ea); padding: 16px 20px; border-radius: 8px; color: white; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Received from ${submission.name}</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 80px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${submission.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #2563eb; font-size: 14px;"><a href="mailto:${submission.email}" style="color: #2563eb; text-decoration: none;">${submission.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${submission.subject}</td>
              </tr>
            </table>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
              <strong style="color: #475569; font-size: 13px; display: block; margin-bottom: 8px;">Message Content:</strong>
              <div style="color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${submission.message}</div>
            </div>

            <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 0;">
              This notification was automatically sent from your Personal Portfolio website.
            </p>
          </div>
        `
      });
      emailDispatched = true;
      console.log(`[Email Dispatched Successfully] Message sent to ${recipientEmail}`);
    } catch (err) {
      console.error('[Nodemailer Dispatch Error]:', err.message);
    }
  }

  return res.status(201).json({
    success: true,
    message: `Thank you, ${submission.name}! Your message has been received. I will get back to you at ${submission.email} promptly.`,
    data: {
      id: submission.id,
      timestamp: submission.receivedAt,
      emailDispatched
    }
  });
});

// Resume Download Endpoint
app.get('/api/resume', (req, res) => {
  const resumePath = path.join(__dirname, '../public/resume.pdf');
  if (fs.existsSync(resumePath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Manvika_Bhupathi_Resume.pdf"');
    return res.sendFile(resumePath);
  }
  return res.status(404).json({ error: 'Resume file not found.' });
});

// Certificate Download Endpoint
app.get('/api/certificate', (req, res) => {
  const certPath = path.join(__dirname, '../public/certificate.pdf');
  if (fs.existsSync(certPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="ApexPlanet_Internship_Certificate.pdf"');
    return res.sendFile(certPath);
  }
  return res.status(404).json({ error: 'Certificate file not found.' });
});

// Static assets from public folder
app.use(express.static(path.join(__dirname, '../public')));

// Static build files from dist folder (when built)
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // SPA fallback
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send(`
      <div style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h2>Backend API Running on Port ${PORT}</h2>
        <p>Run <code>npm run build</code> or <code>npm run dev</code> for development.</p>
        <p><a href="/api/health">Check /api/health</a> | <a href="/api/resume">Download Resume</a></p>
      </div>
    `);
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

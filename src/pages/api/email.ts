// // app/api/send-email/route.ts
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import { writeFile } from 'fs/promises';
// import path from 'path';

// // Create mail transporter
// const transporter = nodemailer.createTransport({
// //   host: process.env.SMTP_HOST,
// //   port: parseInt(process.env.SMTP_PORT || '587'),
// //   secure: process.env.SMTP_SECURE === 'true',
// service:'gmail',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

// export default function handler(request: Request) {
//     if(request.method === 'POST'){
//   try {
//     // Get form data from request
//     console.log(request.body)
//     //const formData = request.formData();
//     const to = process.env.SMTP_USER
//     const subject=null //= formData.get('subject') as string;
//     const message=null //= formData.get('message') as string;
//     const images=null //= formData.getAll('images') as File[];

//     // Validate required fields
//     if (!to || !subject || !message) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Process images
//     const attachments = [];
//     const uploadDir = path.join(process.cwd(), 'public', 'uploads');

//     for (const image of images) {
//       if (image.size > 0) {
//         // Generate unique filename
//         const filename = image.name;
//         const filepath = path.join(uploadDir, filename);

//         // Save file
//         const bytes = await image.arrayBuffer();
//         const buffer = Buffer.from(bytes);
//         await writeFile(filepath, buffer);

//         // Add to email attachments
//         attachments.push({
//           filename: image.name,
//           path: filepath,
//           cid: filename // Content ID for referencing in HTML
//         });
//       }
//     }

//     // Prepare email
//     const mailOptions = {
//       from: process.env.SMTP_FROM,
//       to,
//       subject,
//       text: message, // Plain text version
//       html: `
//         <div>
//           ${message}
//           ${attachments.map(att => 
//             `<img src="cid:${att.cid}" alt="${att.filename}" style="max-width: 100%;">`
//           ).join('')}
//         </div>
//       `,
//       attachments
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Clean up uploaded files
//     // for (const attachment of attachments) {
//     //   try {
//     //     await unlink(attachment.path);
//     //   } catch (error) {
//     //     console.error('Error deleting file:', error);
//     //   }
//     // }

//     return NextResponse.json({ 
//       message: 'Email sent successfully' 
//     });

//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }}
// }

// // Limit the size of the request
// export const config = {
//   api: {
//     bodyParser: true, // Disable the default body parser
//     sizeLimit: '10mb'
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<{ message: string } | { error: string }>
) {
    if (request.method === "POST") {
        try {
            const to = process.env.SMTP_USER;

            const {
                name,
                phone,
                email,
                address,
                projectDetails,
                facilityType,
                projectSize,
                urgency,
            } = request.body;

            if (!name || !email || !phone || !address) {
                return response.status(400).json({ error: "Missing required fields" });
            }

            const mailOptions = {
                from: process.env.SMTP_FROM,
                to,
                subject: "New Transfer Booking Request",
                html: generateEmail({
                    name,
                    email,
                    phone,
                    address,
                    projectDetails,
                    facilityType,
                    projectSize,
                    urgency,
                }),
            };

            await transporter.sendMail(mailOptions);
            return response.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            return response.status(500).json({ error: "Failed to send email" });
        }
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "10mb",
        },
    },
};

function generateEmail({
    name,
    email,
    phone,
    address,
    projectDetails,
    facilityType,
    projectSize,
    urgency,
}: {
    name: string;
    email: string;
    phone: string;
    address: string;
    projectDetails: string;
    facilityType: string;
    projectSize: string;
    urgency: string;
}) {
    return `
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Monaco Express - New Transfer Booking</title>
        <style>
          body, table, td, div, p, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            line-height: 1.47059;
            letter-spacing: -0.022em;
            text-align: center;
          }

          .email-wrapper {
            width: 100%;
            max-width: 680px;
            margin: 0 auto;
            background-color: #ffffff;
          }

          .header {
            background-color: #ffffff;
            padding: 48px 0;
            text-align: center;
            position: relative;
            border-bottom: 2px solid #fafafa;
          }

          .header::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 2px;
            background: #000000;
          }

          .content {
            padding: 48px 32px;
            background-color: #ffffff;
          }

          .section {
            margin-bottom: 48px;
            padding: 40px;
            background: #ffffff;
            border-radius: 24px;
            box-shadow: 0 2px 40px rgba(0, 0, 0, 0.04);
          }

          .section:hover {
            box-shadow: 0 4px 50px rgba(0, 0, 0, 0.06);
            transform: translateY(-2px);
            transition: all 0.4s ease;
          }

          .footer {
            text-align: center;
            padding: 32px;
            background: #ffffff;
            color: #000000;
          }

          h2 {
            color: #000000;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.003em;
            margin-bottom: 32px;
            display: inline-block;
            position: relative;
          }

          h2::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: #000000;
            opacity: 0.7;
          }

          .subtitle {
            color: #000000;
            font-size: 20px;
            font-weight: 400;
            opacity: 0.7;
          }

          .info-label {
            color: #000000;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            margin-bottom: 8px;
            opacity: 0.5;
          }

          .info-value {
            color: #000000;
            font-size: 17px;
            margin-bottom: 32px;
            word-break: break-word;
            font-weight: 400;
            padding: 20px;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.03);
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid rgba(0, 0, 0, 0.03);
          }

          .info-value:last-child {
            margin-bottom: 0;
          }

          .info-value:hover {
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
            transform: translateY(-1px);
            transition: all 0.3s ease;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            <h2>New Transfer Booking Request</h2>
            <p class="subtitle">Monaco Express</p>
          </div>

          <div class="content">
            <div class="section">
              <div class="info-label">Customer Information</div>
              <div class="info-value">
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Phone:</strong> ${phone}
              </div>

              <div class="info-label">Transfer Details</div>
              <div class="info-value">
                <strong>Route:</strong> ${address}<br>
                <strong>Service Type:</strong> ${facilityType}<br>
                <strong>Number of Passengers:</strong> ${projectSize}<br>
                <strong>Urgency:</strong> ${urgency}
              </div>

              <div class="info-label">Additional Information</div>
              <div class="info-value">
                ${projectDetails.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div class="footer">
            <p>This is an automated message from Monaco Express</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendConfirmationEmail(to: string, name: string) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject: 'コース申し込みの確認',
    text: `
${name} 様

コース申し込みありがとうございます。
申し込みを受け付けましたので、ご確認ください。

ご質問やご不明な点がございましたら、お気軽にお問い合わせください。

--
オンライン学習システム
    `,
    html: `
<h1>コース申し込みの確認</h1>
<p>${name} 様</p>
<p>コース申し込みありがとうございます。<br>
申し込みを受け付けましたので、ご確認ください。</p>
<p>ご質問やご不明な点がございましたら、お気軽にお問い合わせください。</p>
<hr>
<p>オンライン学習システム</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
} 
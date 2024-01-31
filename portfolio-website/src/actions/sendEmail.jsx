'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const message = formData.get('message');
  const subject = formData.get('subject');
  const senderEmail = formData.get('senderEmail');

  if (!message || !subject) {
    return {
      error: 'Please fill in all the fields',
    };
  }

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'gadorjani@windowslive.com',
    subject: subject,
    reply_to: senderEmail,
    text: message,
  });
};

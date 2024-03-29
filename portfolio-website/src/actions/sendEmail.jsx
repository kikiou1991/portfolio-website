'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.re_XUYXyLAw_B74BvhcGsYDhVt57arcpSnUQ);

export const sendEmail = async (formData) => {
  const message = formData.get('message');
  const subject = formData.get('subject');
  const senderEmail = formData.get('senderEmail');

  if (!message || !subject) {
    return {
      error: 'Please fill in all of the fields',
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

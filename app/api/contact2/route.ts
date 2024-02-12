import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const mail_vals: {
        from_name: string;
        reply_to: string;
        message: string;
        } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['rudraksh875@gmail.com'],
      subject: `Hello from ${mail_vals.from_name}`,
      react: EmailTemplate({name: mail_vals.from_name, email: mail_vals.reply_to, message: mail_vals.message}) as React.ReactElement,
    });

    if (error) {
        console.log(error);
        
      return Response.json({ error });
    }
    console.log(data);
    
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    
    return Response.json({ error });
  }
}
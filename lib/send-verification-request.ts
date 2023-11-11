import { SendVerificationRequestParams } from 'next-auth/providers';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_TOKEN as string)

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams,
) => {
  try {
    await resend.emails.send({
      from: 'YOUR EMAIL FROM (eg: team@resend.com)',
      to: params.identifier,
      subject: 'YOUR EMAIL SUBJECT',
      html: 'YOUR EMAIL CONTENT',
    });
  } catch (error) {
    console.log({ error });
  }
};
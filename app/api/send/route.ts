import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // const data = await resend.emails.send({
    //   from: 'saastherapy <saastherapy@saastherapy.com>',
    //   to: ['orukyunus@gmail.com'],
    //   subject: 'Hello world',
    //   react: Email({ firstName: 'John' }),
    //   text: "Welcome"
    // });

    console.log();
    

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error });
  }
}

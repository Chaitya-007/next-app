import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() 
{
    try 
    {

        const data = await resend.emails.send(
            {
                from: "onboarding@resend.dev",
                to: "chaitanyaasole@gmail.com",
                subject: "Hello from Resend",
                react: WelcomeTemplate({}),
            }
            )
            return NextResponse.json(data);
    }
    catch(error)
    {
        console.error(error)
        return NextResponse.json({error})
    }

}
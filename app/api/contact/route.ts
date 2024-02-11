import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const mail_vals = await request.json();
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["rudraksh875@gmail.com"],
            subject: `New message from ${mail_vals.from_name}`,
            react: EmailTemplate({
                firstName: mail_vals.from_name,
            }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error });
        }

        return Response.json({ mail_vals });
    } catch (error) {
        return Response.json({ error });
    }
}

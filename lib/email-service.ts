import emailjs from '@emailjs/browser'

export default async function sendEmail(
    variables: Record<string, string>,
    ) {
    const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        variables,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
    ).then((res) => {
        return res})
    .catch((err) => {
        return err}
    )
    
    return response
    }

//     emailjs.send("service_9vpw7e4","template_fh5kdvc",{
// from_name: "hehehe",
// reply_to: "hehe",
// message: "he",
// });
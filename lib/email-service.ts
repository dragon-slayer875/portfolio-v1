export default async function sendContactForm(
    variables: Record<string, string>
) {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(variables),
    })
        .then((res) => {            
            return res.status;
        })
        .catch((err) => {
            return err;
        });
        
    return response;
}

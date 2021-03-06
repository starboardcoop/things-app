import fetch from "node-fetch";

export async function handler(event, context, callback) {
    console.log("Authenticating code...");

    const { phone, code } = JSON.parse(event.body);

    console.log(`${phone}, ${code}`);

    const result = await fetch('https://starboardcoop-things-api.glitch.me/humans/auth/code', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ phone, code })
    });

    const { member, status } = await result.json();

    console.log(member);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    if (status != 200)
    {
        return {
            statusCode: status,
            body: JSON.stringify({error: `Your access code is invalid.`})
        }
    }
     
    return {
        statusCode: status,
        body: JSON.stringify({ member: member, token: token })
    }
} 
import fetch from "node-fetch";

export async function handler(event, context, callback) {
    console.log("Signing tf up...");

    const { phone, name } = JSON.parse(event.body);

    console.log(`${phone}, ${name}`);

    const result = await fetch('https://starboardcoop-things-api.glitch.me/humans/auth/enroll', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ phone, name })
    });

    const { member } = await result.json();

    console.log(member);

    return {
        statusCode: 200,
        body: JSON.stringify({ member: member })
    }
}
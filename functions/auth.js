import fetch from "node-fetch";

export async function handler(event, context, callback) {
    console.log("Signing in...");

    const { phone } = JSON.parse(event.body);

    const result = await fetch('https://starboardcoop-things-api.glitch.me/humans/auth', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ phone })
    });

    const { name } = await result.json();

    return {
        statusCode: 200,
        body: JSON.stringify({ name: name })
    }
}
import fetch from "node-fetch";

export async function post(req, res) {
    console.log("Logging in...");

    const { phone } = req.body;

    const result = await fetch('https://starboardcoop-things-api.glitch.me/humans/auth', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ phone })
    });

    const { name } = await result.json();

    res.end(JSON.stringify({ name: name }));
}
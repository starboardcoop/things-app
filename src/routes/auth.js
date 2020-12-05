import fetch from "node-fetch";

export async function get(req, res, next) {
    const result = await fetch('https://starboardcoop-things-api.glitch.me/humans/sign-in');
    const { name } = await result.json();

    console.log("Logging in...");

    res.end(JSON.stringify({ name: name }));
}
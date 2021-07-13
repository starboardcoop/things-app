import fetch from "node-fetch";

export async function handler(event, context, callback) {
    const result = await fetch(`https://starboardcoop-things-api.glitch.me/things/ppl`);
    const data = await result.json();
    console.log(data)
    
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
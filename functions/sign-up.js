export async function handler(event, context, callback) {
    console.log("Signing tf up...");

    const { phone, name } = JSON.parse(event.body);

    console.log(`${phone}, ${name}`);

    // const result = await fetch('https://starboardcoop-things-api.glitch.me/humans/auth/code', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //     },
    //     body: JSON.stringify({ phone, code })
    // });

    const member = { phone: phone, name: name };

    console.log(member);

    return {
        statusCode: 200,
        body: JSON.stringify({ member: member })
    }
}
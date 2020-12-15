export async function handler(event, context, callback) {
    console.log("Authenticating code...");

    const { phone, code } = JSON.parse(event.body);

    console.log(`${phone}, ${code}`);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    return {
        statusCode: 200,
        body: JSON.stringify({ token: token })
    }
}
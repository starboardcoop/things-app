import Session from '../../../session';
import Phone from '../../../lib/phone';

export async function trySubmit(phoneText) {
    const phone = new Phone(phoneText);
    const invalid = !phone.isValid();

    if (invalid) {
        console.log('Invalid phone number.');
        return false;
    } else {
        const result = await fetch("/.netlify/functions/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ phone: phone.asNumber() })
        });

        const data = await result.json();
        console.log(`Hi, ${data.name}!`);

        Session.update({ name: data.name, phone: phone.asNumber() });
    }

    return true;
}
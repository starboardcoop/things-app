import { parsePhoneNumberFromString } from 'libphonenumber-js';

export default class Phone {
    phone;

    constructor(phoneString) {
        this.phone = parsePhoneNumberFromString(phoneString);
    }

    isValid() {
        return (this.phone && this.phone.isValid())
    }

    asNumber() {
        return this.phone.number;
    }
}
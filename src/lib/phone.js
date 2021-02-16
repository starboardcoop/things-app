import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';

export default class Phone {
    constructor(phoneString) {
        this.phone = parsePhoneNumberFromString(phoneString, 'US');
    }

    isValid() {
        return this.phone.isValid();
    }

    asNumber() {
        return this.phone.number;
    }

    static formatted(phoneString) {
        if (phoneString.length > 6)
            return new AsYouType('US').input(phoneString);
        return phoneString;
    }
}
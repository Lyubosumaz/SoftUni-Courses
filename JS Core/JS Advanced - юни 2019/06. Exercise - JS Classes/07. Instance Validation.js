class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.initialClientId(clientId);
        this.initialEmail(email);
        this.initialFirstName(firstName);
        this.initialLastName(lastName);
    }

    initialClientId(clientId) {
        // if (typeof clientId === "string") {
        //     if (clientId.length === 6) {
        //         let integer = parseInt(clientId);
        //         if (String.valueOf(integer).length === clientId.length) {
        //             this.clientId = clientId;
        //         }
        //     }
        // }
        if (typeof clientId === "string" && clientId.length === 6) {
            this.clientId = clientId;
        } else {
            throw new TypeError("Client ID must be a 6-digit number");
        }
    }

    initialEmail(email) {
        const pattern = /[a-z]+\@[a-z]+\.[a-z]+/gi;
        if (pattern.test(email)) {
            this.email = email;
        } else {
            throw new TypeError("Invalid e-mail");
        }
    }

    initialFirstName(firstName) {
        const pattern = /^[a-zA-Z]+$/;
        if (pattern.test(firstName)) {
            if (firstName.length >= 3 && firstName.length <= 20) {
                this.firstName = firstName;
            } else {
                throw new TypeError("First name must be between 3 and 20 characters long");
            }
        } else {
            throw new TypeError("First name must contain only Latin characters")
        }
    }

    initialLastName(lastName) {
        const pattern = /^[a-zA-Z]+$/;
        if (pattern.test(lastName)) {
            if (lastName.length >= 3 && lastName.length <= 20) {
                this.lastName = lastName;
            } else {
                throw new TypeError("Last name must be between 3 and 20 characters long");
            }
        } else {
            throw new TypeError("Last name must contain only Latin characters")
        }
    }
}

const { expect } = require("chai");

expect(() => new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')).to.throw(TypeError).which.has.property('message', 'Client ID must be a 6-digit number');
expect(() => new CheckingAccount('131455', 'ivan@ ', 'Ivan', 'Petrov')).to.throw(TypeError).which.has.property('message', 'Invalid e-mail');
expect(() => new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')).to.throw(TypeError).which.has.property('message', 'First name must be between 3 and 20 characters long');
expect(() => new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')).to.throw(TypeError).which.has.property('message', 'Last name must contain only Latin characters');
// new result('131455', 'ivan@some.com', 'Ivan', 'Petrov');
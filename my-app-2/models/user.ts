import { v4 as uuidv4 } from 'uuid';


export class User {
    email!: string;
    uid!: string;
    password!: string;
    firstName!: string;
    lastName!: string;

    constructor(json: any) {
        if (json) {
            Object.assign(this, {
                ...json,
                uid: uuidv4()
            });

        }
    }
}


export class UserLogin {
    email!: string;
    password!: string;
    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}


export class UserRegister {
    email!: string;
    password!: string;
    confirmPassword!: string;
    firstName!: string;
    lastName!: string;
    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}
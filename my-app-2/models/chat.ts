import { v4 as uuidv4 } from 'uuid';
export class Chat {
    id!: number;
    question!: string;
    answer!: string;

    constructor(json: any) {
        if (json) {
            Object.assign(this, {
                ...json,
                id: uuidv4()
            });
        }
    }
}
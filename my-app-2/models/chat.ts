export class Chat {
    id!: number;
    question!: string;
    answer!: string;

    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}
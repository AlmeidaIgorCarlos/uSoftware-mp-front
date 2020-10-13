export default class Comment {
    constructor(id: string, text: string, createdAt: string) {
        this.id = id;
        this.text = text;
        this.createdAt = createdAt;
    }

    id: string;
    text: string;
    createdAt: string;
}
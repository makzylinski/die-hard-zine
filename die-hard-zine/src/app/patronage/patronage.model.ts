export class Patronage {
    public id: number;
    public date: Date;
    public author: string;
    public headline: string;
    public content: string;
    public photoUrl: string;

    constructor(id: number, date: Date, author: string, head: string, content: string, picUrl: string) {
        this.id = id;
        this.date = date;
        this.author = author;
        this.headline = head;
        this.content = content;
        this.photoUrl = picUrl;
    }
}

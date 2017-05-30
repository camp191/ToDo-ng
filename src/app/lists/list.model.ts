export class List {
    public listTopic: string;
    public listDescription: string;
    public isDone: boolean;

    constructor(listTopic: string, listDescription:string) {
        this.listTopic = listTopic;
        this.listDescription = listDescription;
        this.isDone = false
    }
}
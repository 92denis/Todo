export class Todo {
    constructor(public id: number,
        public name: string,
        public date: Date,
        public checked: boolean,
        public tags: any[]) { }
}

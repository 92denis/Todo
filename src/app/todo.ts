export class Todo {
    constructor(public name: string,
        public date: Date,
        public checked: boolean,
        public tags: any[]) { }
}

export class Todo {
    public $key: string;
    public name: string;
    public date: Date;
    public checked: boolean;
    public tags: any[];

    constructor() {
        this.checked = false;
        this.tags = [ ];
    }
}

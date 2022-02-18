import {action, autorun, makeObservable, observable} from 'mobx';

export interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export class TodoStoreImpl {
    todos: TodoItem[] = [];

    constructor(){
        makeObservable(this, {
            todos: observable,
            addTodo: action
        })

        //autorun(() => console.log(this.todos));
    }

    //Action 
    addTodo(title: string){
        const item: TodoItem ={
            id: +Math.random().toFixed(4),
            title,
            completed: false,
        }
        this.todos.push(item);
    }
}

export const TodoStore = new TodoStoreImpl();
import {action, makeObservable, observable} from 'mobx';

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
            addTodo: action,
            markCompleted: action,
            deleteTodo: action,
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

    //Action
    markCompleted(id: number){
        this.todos.map(todo =>{
            if(todo.id === id){
                const status = todo.completed;
                todo.completed = !status;
            }
            return todo;
        })
    }

    //Action
    deleteTodo(id: number){
       this.todos = this.todos.filter(todo => todo.id !== id);
    }
}

export const TodoStore = new TodoStoreImpl();
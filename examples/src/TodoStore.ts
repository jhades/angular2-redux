
import  {Injectable} from 'angular2/angular2';
import {List} from 'immutable';
import {Todo} from "./Todo";

@Injectable()
export class TodoStore {

    todos: List<Todo> = List([new Todo(1, 'task 1'), new Todo(2, 'task 2')]);

    addTodo(description) {
        this.todos = this.todos.push(new Todo(this.todos.size + 1, description));
    }

    completeAll() {

    }
    
    get state() {
        return this.todos;
    }

}
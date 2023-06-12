import {Component, Input, OnInit} from '@angular/core';
import { todo} from "../../../entity/todo";
import {todos} from '../../../todos';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  todos: todo[] = todos;
  constructor(){

  }

  ngOnInit(): void{

  }
}

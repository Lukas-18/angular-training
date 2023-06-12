import { Component, Input, OnInit } from '@angular/core';
import { todo} from "../../../entity/todo";

@Component({
  selector: 'todo', //So muss der Tag dann in "app.component.html" heißen
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  @Input() todo!: todo;
  constructor(){

  }

  ngOnInit(): void{

  }
}

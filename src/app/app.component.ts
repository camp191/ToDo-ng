import { Component } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: List[] = [
    new List('Hello', 'From the other side'),
    new List('Good Morning', 'From the same side')
  ]

  addTodo(list) {
    this.lists.push(list)
  }
}

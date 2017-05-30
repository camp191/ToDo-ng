import { Component } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: List[] = [
    new List('Hello', 'From the other side', false),
    new List('Good Morning', 'From the same side', false)
  ]
  doneList: List

  addTodo(list) {
    this.lists.push(list)
  }

  listDeleted(listDelete) {
    this.lists = this.lists.filter(list => {
      return list !== listDelete
    })
  }

  listDone(listDone) {
    this.listDeleted(listDone)
    this.lists.push(new List(listDone.listTopic, listDone.listDescription, true))
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() lists:List[]
  @Input('doneList') done: List
  @Output() deleteList = new EventEmitter<List>()
  @Output() listDone = new EventEmitter<List>()
  listSelected: List

  constructor() { }

  ngOnInit() {
  }

  listSelect(list) {
    this.listSelected = list
  }

  listDeleted(list) {
    this.deleteList.emit(list)
  }

  doneList(list) {
    this.listDone.emit(list)
  }
}

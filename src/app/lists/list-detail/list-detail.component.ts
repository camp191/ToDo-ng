import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  @Input() listSelected: List
  @Output() listDelete = new EventEmitter<List>()
  @Output() listDone = new EventEmitter<List>()
  
  constructor() { }

  ngOnInit() {

  }

  deleteList() {
    this.listDelete.emit(this.listSelected)
    this.listSelected = null
  }

  doneList() {
    this.listDone.emit(this.listSelected)
    this.listSelected = null
  }

}

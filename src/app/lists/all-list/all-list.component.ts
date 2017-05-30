import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
  @Input() lists: List[]
  @Output() selectedList = new EventEmitter<List>()

  
  constructor() { }

  ngOnInit() {
  }

  listSelect(list) {
    this.selectedList.emit(list)
  }

}

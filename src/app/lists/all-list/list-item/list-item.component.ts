import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Output() selectedList = new EventEmitter<List>()
  @Input() list: List
  constructor() { }

  ngOnInit() {
  }

  selectList() {
    this.selectedList.emit(this.list)
  }

}

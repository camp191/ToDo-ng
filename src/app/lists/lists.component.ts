import { Component, OnInit, Input } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() lists:List[]
  listSelected: List 

  constructor() { }

  ngOnInit() {
  }

  listSelect(list) {
    this.listSelected = list
  }
}

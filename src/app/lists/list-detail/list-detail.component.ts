import { Component, OnInit, Input } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  @Input() listSelected: List
  
  constructor() { }

  ngOnInit() {

  }

}

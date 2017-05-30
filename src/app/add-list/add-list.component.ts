import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { List } from "app/lists/list.model";

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @Output() todoAdd = new EventEmitter<List>()
  @ViewChild('todoForm') todoForm: ElementRef
  @ViewChild('btnShowForm') btnShowForm: ElementRef
  topicTodo = ""
  detailTodo = ""
  newList: List

  constructor() { }

  ngOnInit() {
  }

  clearInput() {
    this.topicTodo = ""
    this.detailTodo = ""
  }

  hiddenForm() {
    this.todoForm.nativeElement.hidden = true
    this.btnShowForm.nativeElement.hidden = false
  }

  showForm() {
    this.todoForm.nativeElement.hidden = false
    this.btnShowForm.nativeElement.hidden = true
  }

  addList() {
    if(this.topicTodo === "" || this.detailTodo === "") {
      return alert('Please Fill the Input')
    }

    this.newList = new List(this.topicTodo, this.detailTodo, false)
    this.todoAdd.emit(this.newList)
    this.topicTodo = ""
    this.detailTodo = ""
  }

}

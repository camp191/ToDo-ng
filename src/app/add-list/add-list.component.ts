import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @ViewChild('todoForm') todoForm: ElementRef
  @ViewChild('btnShowForm') btnShowForm: ElementRef
  topicTodo = ""
  detailTodo = ""

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

}

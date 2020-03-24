import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public keyword: string
  public todolist: any[] = []



  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKw(this.todolist, this.keyword)) {
        this.todolist.push({ title: this.keyword, status: 0 }) //0代办 1已完成
      }
      else {
        alert('含有相同值')
      }

      this.keyword = ''

    }
  }
  deleteHistory(key) {
    this.todolist.splice(key, 1)
  }

  todolistHasKw(todolist, keyword) {
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true

      }
    }
    return false
  }

  constructor() { }

  ngOnInit() {
  }

}

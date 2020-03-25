import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service'

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
        this.storage.set('todolist', this.todolist)
      }
      else {
        alert('含有相同值')
      }

      this.keyword = ''

    }
  }
  deleteHistory(key) {
    this.todolist.splice(key, 1)
    this.storage.set('todolist', this.todolist)
  }

  todolistHasKw(todolist, keyword) {
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true

      }
    }
    return false
  }

  constructor( public storage:StorageService) {
    // let s= this.storage.get()
    // console.log('todolist',s)
  }

  ngOnInit() {
    //页面刷新会触发这个生命周期函数
    console.log('刷新')
    var todolist: any = this.storage.get('todolist')

    if (todolist){
      this.todolist = todolist
    }
  }

  checkboxChange(){
    console.log('事件触发了')
    this.storage.set('todolist', this.todolist)
  }

}

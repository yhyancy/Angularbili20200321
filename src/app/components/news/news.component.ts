import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title = '我是新闻页'
  public userinfo: any = {
    username: 'yancy',
    age: 18
  }
  public message: any;
  // 绑定属性
  public attr: any = "我是绑定的属性"
  // 绑定html
  public hml: any = "<h2>绑定html</h2>"
  // 定义数组
  public arr = ['111', '222', '333']
  public list: any[] = ['111', '222', '333']
  public userlist: Array<any> = [
    {
      id: 1, list: [
        { name: 'ysh', age: 18, gender: 0 },
        { name: 'abc', age: 18, gender: 0 },
        { name: 'edf', age: 18, gender: 0 }]
    },
    {
      id: 2, list: [
        { name: '111', age: 18, gender: 0 },
        { name: '22', age: 18, gender: 0 },
        { name: '33', age: 18, gender: 0 }]
    },
    {
      id: 3, list: [
        { name: 'ysh', age: 18, gender: 1 },
        { name: 'abc', age: 18, gender: 0 },
        { name: 'edf', age: 18, gender: 0 }]
    }]

  constructor() {
    // 属性赋值
    this.message = '这是给属性赋值'
  }

  ngOnInit() {
  }

}

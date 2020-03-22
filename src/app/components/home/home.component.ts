import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //循环数组，显示索引号
  public list: any[] = [{ 'title': '我是新闻1' }, { 'title': '我是新闻2' }, { 'title': '我是新闻3' }]
  public flag: boolean = true
  public orderStatus: number = 1 // 1.没提交订单 2. 提交订单 3. 已发货 4. 已收货
  public sty: string = 'red'
  public today: any = new Date()
  public title: any = '我是title'
  public keywords: string
  public key: string = '我是默认的key值'
  constructor() { }

  ngOnInit() {
  }
  run() {
    alert('事件方法')
  }
  getData() {
    alert(this.today)
  }
  setData() {
    this.title = '我是改变后的title'
  }
  keyDown(e) {
    console.log(e) //获取dom对象
    console.log(e.target.value)
  }
  keyUp(e) {
    console.log(e) //获取dom对象
    console.log(e.target.value)
  }
  runEvent(e) {
    var dom: any = e.target
    dom.style.color = 'red'
  }
  changeKey() {
    this.key = '我是改变后的值'
  }
}

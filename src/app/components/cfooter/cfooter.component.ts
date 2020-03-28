import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cfooter',
  templateUrl: './cfooter.component.html',
  styleUrls: ['./cfooter.component.scss']
})
export class CfooterComponent implements OnInit {
  public msg: any="我是子组件的msg"
 @Output() private outer= new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
 public run(){
  alert('我是子组件的run方法')
 }
  sendParent(){
  //  alert('我是子组件sendParent方法')
   this.outer.emit('我是子组件的数据')
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfooter',
  templateUrl: './cfooter.component.html',
  styleUrls: ['./cfooter.component.scss']
})
export class CfooterComponent implements OnInit {
  public msg: any="我是子组件的msg"

  constructor() { }

  ngOnInit() {
  }
public run(){
  alert('我是子组件的run方法')
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhome',
  templateUrl: './fhome.component.html',
  styleUrls: ['./fhome.component.scss']
})
export class FhomeComponent implements OnInit {

  public title:any="首页组件的标题"
  public msg:any="我是父组件的msg"

  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('我是父组件的run方法')
  }

}

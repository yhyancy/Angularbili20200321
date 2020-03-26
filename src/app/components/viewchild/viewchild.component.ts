import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {
  //获取dom节点
  @ViewChild('myBox',{static:true}) myBox: any
  //获取组件
  @ViewChild('header', { static: true }) header:any


  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('this.myBox',this.myBox)
    console.log('this.myBox.nativeElement', this.myBox.nativeElement)
    //调用子组件的方法
    this.header.run()

  }
  getChildrenRun() {
    //调用子组件的方法
    this.header.run()
  }

}

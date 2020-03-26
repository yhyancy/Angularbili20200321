import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domleftbar',
  templateUrl: './domleftbar.component.html',
  styleUrls: ['./domleftbar.component.scss']
})
export class DomleftbarComponent implements OnInit {
  public flag:boolean=true

  constructor() { }

  ngOnInit() {
    //组件和指令初始化完成，并不是真正的dom加载完成
    console.log('ngOnInit')
    let oBox: any= document.getElementById('box')
    console.log(oBox.innerHTML)
    oBox.style.color="red"

    //box1
    // 获取不到dom节点
    // let oBox1: any = document.getElementById('box1')
    // console.log(oBox1.innerHTML)
    // oBox1.style.color = "blue"
  }
 //视图加载完成以后触发的方法 dom加载完成 （建议把dom操作放到这里面）
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let oBox1: any = document.getElementById('box1')
    console.log(oBox1.innerHTML)
    oBox1.style.color = "blue"
  }



}

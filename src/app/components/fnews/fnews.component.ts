import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fnews',
  templateUrl: './fnews.component.html',
  styleUrls: ['./fnews.component.scss']
})
export class FnewsComponent implements OnInit {
  @ViewChild('footer',{static:true}) footer:any

  constructor() { }

  ngOnInit() {
  }
  getChildMsg(){
    alert(this.footer.msg)
  }
  getChildRun(){
    alert(this.footer.run())
  }

  // outer
  run(e){
   alert('我是父组件run方法')
   console.log(e)
  }
}

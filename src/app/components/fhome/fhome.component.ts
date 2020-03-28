import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhome',
  templateUrl: './fhome.component.html',
  styleUrls: ['./fhome.component.scss']
})
export class FhomeComponent implements OnInit {

  public title:any="首页组件的标题"

  constructor() { }

  ngOnInit() {
  }

}

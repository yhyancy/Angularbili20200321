import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cheader',
  templateUrl: './cheader.component.html',
  styleUrls: ['./cheader.component.scss']
})
export class CheaderComponent implements OnInit {

  @Input() title1:any
  @Input() msg:any
  constructor() { }

  ngOnInit() {
  }

}

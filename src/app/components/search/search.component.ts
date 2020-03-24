import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keyword: string
  public historyList: any[] = []
  doSearch() {
    console.log(this.keyword)
    //去掉重复值
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword)
    }
    console.log('historylist', this.historyList)
    this.keyword = ''
  }
  deleteHistory(key) {
    alert(key)
    this.historyList.splice(key, 1)
  }
  constructor() { }

  ngOnInit() {
  }

}

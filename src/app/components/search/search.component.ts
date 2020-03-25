import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';
// 引入服务
import { StorageService } from '../../services/storage.service'

//不推荐
// var storage = new StorageService()
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
      this.storage.set('searchlist', this.historyList)
    }
    console.log('historylist', this.historyList)
    this.keyword = ''
  }
  deleteHistory(key) {
    alert(key)
    this.historyList.splice(key, 1)
  }
  constructor(public storage:StorageService) {
      // let s= this.storage.get();
      // console.log('search',s)
  }

  ngOnInit() {
    //页面刷新会触发这个生命周期函数
    console.log('刷新')
    var searchlist: any = this.storage.get('searchlist')
    console.log('searchlist', searchlist)
    console.log(typeof searchlist)

    if(searchlist){
      this.historyList = searchlist
    }
  }

}

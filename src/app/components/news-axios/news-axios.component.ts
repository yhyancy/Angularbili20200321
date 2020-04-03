import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
//引入服务里面的 axios获取数据
import { HttpServiceService } from '../../services/http-service.service'
@Component({
  selector: 'app-news-axios',
  templateUrl: './news-axios.component.html',
  styleUrls: ['./news-axios.component.scss']
})
export class NewsAxiosComponent implements OnInit {
  public  list:any[]=[];
  constructor(public http: HttpClient, public httpService: HttpServiceService) { }

  ngOnInit() {
  }
  getData(){
    // alert('test')
    let api="http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=>{
   console.log(response)
   this.list=response.result
    })
  }
  postData(){
    // alert('post')
    // 手动设置请求的类型
    const httpOtions = {headers:new HttpHeaders({'content-Type':'application/json'})}; //固定写法
    var api='http://127.0.01:3000/dologin'
    this.http.post(api,{ "username": "张三", 'age': 20}, httpOtions).subscribe((response)=>{
      console.log(response)
    })
  }

  getJsonpData(){
    var api = 'http://127.0.01:3000/dologin'
    this.http.jsonp(api,'callback').subscribe((response)=>{
      console.log(response)
    })
  }
  getAxiosData(){
    var api = 'http://127.0.01:3000/dologin'
    this.httpService.axiosGet(api).then((data)=>{
        console.log(data)
    })
  }
}

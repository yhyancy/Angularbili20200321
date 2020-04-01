import { Component, OnInit } from '@angular/core';
import { RequestService } from './../../services/request.service'
import {map,filter } from 'rxjs/operators'

@Component({
  selector: 'app-homerxjs',
  templateUrl: './homerxjs.component.html',
  styleUrls: ['./homerxjs.component.scss']
})
export class HomerxjsComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit() {
    //同步方法
    let data=this.request.getdata();
    console.log(data)
    //callback 获取异步数据 -异步数据没法在外部获取
    let callbackData = this.request.getCallbackData();
    console.log(callbackData) //undefined

    //解决异步数据没法在外部获取
    //1.回调函数
   this.request.getCallbackData1((data)=>{
    console.log('1.回调函数',data) //张三

    // 2.promise获取异步数据
    var promiseData= this.request.getPromiseData()
    promiseData.then((data)=>{
      console.log('2.promise',data)
    })
   });

   //3. rxjs获取异步方法数据
   var rxjsData= this.request.getRxjsData()
   rxjsData.subscribe((data)=>{
    console.log('3.rxjs',data)
   })

    // 3.1 unsubscribe取消订阅
    //过1秒以后撤回刚才的操作
    var stream= this.request.getRxjsData()
    var d= stream.subscribe((data) => {
     console.log('3.rxjs', data)
    })
    setTimeout(() => {
      d.unsubscribe() //取消订阅，取消方法的执行
    }, 1000)

    //执行多次
    //promise 执行多次（没有这个能力）
    var promiseIntervalData = this.request.getPromiseIntervalData()
    promiseIntervalData.then((data) => {
      console.log('2.1 -promise多次执行', data)
    })

    //rxjs多次执行
    // var rxjsIntervalData = this.request.getRxjsIntervalData()
    // rxjsIntervalData.subscribe((data) => {
    //   console.log('3.1-rxjs多次执行',data)
    // })


  }





}

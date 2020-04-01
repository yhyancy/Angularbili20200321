import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  //同步方法
  getdata(){
    return 'this is service data'
  }
  // 异步方法
  getCallbackData(){
    setTimeout(()=>{
      var data="张三"
      return data
    }, 1000)
  }
 // 1. 回调函数
  getCallbackData1(cb) {
    setTimeout(() => {
      var data = "张三"
      // return data
      cb(data)
    },1000)
  }

  // 2. promise
  getPromiseData() {
    return new Promise((resolve,reject)=>{

      setTimeout(() => {
        var data = "张三"
        resolve(data)
      }, 1000)
    })
  }

  // 3. rxjs
  getRxjsData() {
    return new Observable((observer)=>{
      setTimeout(() => {
        var data = "张三"
        observer.next(data)
      }, 3000) //3秒种以后才能获取到rxjs
    })
  }
 // 多次执行
  getPromiseIntervalData() {
    return new Promise((resolve, reject) => {

      setInterval(() => {
        var data = "张三"
        resolve(data)
      }, 1000)
    })
  }

  getRxjsIntervalData() {

    return new Observable((observer) => {
      let count=0
      setInterval(() => {
        count++;
        var data = "rxjsInterval-张三" + count
        observer.next(data)
      }, 2000) //3秒种以后才能获取到rxjs
    })
  }


}

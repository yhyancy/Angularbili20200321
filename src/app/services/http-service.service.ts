import { Injectable } from '@angular/core';
import axios from 'axios'
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor() { }


  axiosGet(api){
     return new Promise(()=>{
         // promise
       axios.get(api)
         .then(function (response) {
           // handle success
           console.log(response);
         });
     })
  }

}

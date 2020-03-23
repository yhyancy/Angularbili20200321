import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleinfo: any =
    {
      username: '',
      sex: '1',
      cityList: ['北京', '上海', '深圳'],
      city: '北京',
      hobby: [{ title: '吃饭', checked: false },
      { title: '睡觉', checked: false },
      { title: '打豆豆', checked: false }
      ],
      note: ''
    }

  constructor() { }

  ngOnInit() {
  }

  // jquery获取元素数据
  // let unameDom: any = document.getElementById('username')
  // console.log(unameDom.value)

  // 双向数据绑定来获取元素数据
  doSubmit() {

    console.log(this.peopleinfo)

  }
}

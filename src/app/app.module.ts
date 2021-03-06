import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//引用axios
import { HttpClientModule } from '@angular/common/http';
//引入jsonp 解决跨域问题
import { HttpClientJsonpModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './todolist/todolist.component';

//引用并配置服务
import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service'
import { DomleftbarComponent } from './components/domleftbar/domleftbar.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { TransitionComponent } from './components/transition/transition.component';
import { FhomeComponent } from './components/fhome/fhome.component';
import { CheaderComponent } from './components/cheader/cheader.component';
import { CfooterComponent } from './components/cfooter/cfooter.component';
import { FnewsComponent } from './components/fnews/fnews.component';
import { HomerxjsComponent } from './components/homerxjs/homerxjs.component';
import { NewsAxiosComponent } from './components/news-axios/news-axios.component'
import { from } from 'rxjs';
import { HttpServiceService } from './services/http-service.service'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    DomleftbarComponent,
    ViewchildComponent,
    TransitionComponent,
    FhomeComponent,
    CheaderComponent,
    CfooterComponent,
    FnewsComponent,
    HomerxjsComponent,
    NewsAxiosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService, RequestService, HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

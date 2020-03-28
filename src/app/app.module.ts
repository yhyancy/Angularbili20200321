import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './todolist/todolist.component';


//引用并配置服务
import { StorageService } from './services/storage.service';
import { DomleftbarComponent } from './components/domleftbar/domleftbar.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { TransitionComponent } from './components/transition/transition.component';
import { FhomeComponent } from './components/fhome/fhome.component';
import { CheaderComponent } from './components/cheader/cheader.component';
import { CfooterComponent } from './components/cfooter/cfooter.component';
import { FnewsComponent } from './components/fnews/fnews.component'

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
    FnewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

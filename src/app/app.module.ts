import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { DetailednewsComponent } from './detailednews/detailednews.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    AllnewsComponent,
    DetailednewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

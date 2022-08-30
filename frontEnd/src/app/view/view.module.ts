import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { PagesModule } from '../pages/pages.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    SharedModule,
    AuthModule,
    RouterModule,
    BrowserModule
  ],
  exports : [
    ViewComponent
  ]
})
export class ViewModule { }

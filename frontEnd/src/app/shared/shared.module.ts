import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MasterContainerComponent } from './master-container/master-container.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MasterContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports :[
    NavbarComponent,
    FooterComponent,
    MasterContainerComponent
  ]
})
export class SharedModule { }

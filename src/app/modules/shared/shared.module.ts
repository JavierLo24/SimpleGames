import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    DashNavbarComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [
    DashNavbarComponent
  ]
})
export class SharedModule { }

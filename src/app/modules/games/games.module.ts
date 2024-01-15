import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { PiedraPapelTijComponent } from './components/piedra-papel-tij/piedra-papel-tij.component';


@NgModule({
  declarations: [
    PiedraPapelTijComponent
  ],
  exports:[
    PiedraPapelTijComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { PiedraPapelTijComponent } from './components/piedra-papel-tij/piedra-papel-tij.component';
import {FormsModule} from "@angular/forms";
import { TresEnLineaComponent } from './components/tres-en-linea/tres-en-linea.component';


@NgModule({
  declarations: [
    PiedraPapelTijComponent,
    TresEnLineaComponent
  ],
  exports:[
    PiedraPapelTijComponent
  ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        FormsModule
    ]
})
export class GamesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PiedraPapelTijComponent} from './modules/games/components/piedra-papel-tij/piedra-papel-tij.component'
import {GamesModule} from "./modules/games/games.module";
import {SharedModule} from "./modules/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GamesModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

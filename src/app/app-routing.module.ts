import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PiedraPapelTijComponent} from "./modules/games/components/piedra-papel-tij/piedra-papel-tij.component";

const routes: Routes = [

  {
    path: '**',
    component: PiedraPapelTijComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

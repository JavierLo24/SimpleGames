import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PiedraPapelTijComponent} from "./modules/games/components/piedra-papel-tij/piedra-papel-tij.component";
import {TresEnLineaComponent} from "./modules/games/components/tres-en-linea/tres-en-linea.component";


const routes: Routes = [
  {
    path: 'piedrapapeltij',
    component: PiedraPapelTijComponent
  },
  {
    path: 'treslinea',
    component: TresEnLineaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

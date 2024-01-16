import { Component } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tij',
  templateUrl: './piedra-papel-tij.component.html',
  styleUrls: ['./piedra-papel-tij.component.css']
})
export class PiedraPapelTijComponent {

  public player1 : string[] = ["papel", "piedra", "tijera"];
  public player2 : string = "";
  public resultado: string = "A jugar";
  select1:string = "";
  public showOption: boolean = false;

cambiarPalabra():void{
  console.log(this.select1)
  this.player2 = this.player1[Math.floor(Math.random() * this.player1.length)];

  if(this.select1 == this.player2){
    this.resultado = "Empate"
  } else {
    if (this.select1 == "papel" && this.player2 == "piedra" || this.select1 == "piedra" && this.player2 == "tijera" || this.select1 == "tijera" && this.player2 == "papel"){
      this.resultado = "player1 wins"
    }else {
      if (this.select1 == "tijera" && this.player2 == "piedra" || this.select1 == "piedra" && this.player2 == "papel" || this.select1 == "papel" && this.player2 == "tijera"){
        this.resultado = "player2 wins"
      }
    }
  }
}





}

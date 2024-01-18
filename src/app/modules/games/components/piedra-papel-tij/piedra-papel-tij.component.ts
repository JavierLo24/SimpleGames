import {Component} from '@angular/core';
import {OptionsGame} from '../../interfaces/options-game'

@Component({
  selector: 'app-piedra-papel-tij',
  templateUrl: './piedra-papel-tij.component.html',
  styleUrls: ['./piedra-papel-tij.component.css']
})
export class PiedraPapelTijComponent {

  public player1 : string = "";
  public player2 : string = "";
  public resultado: string = "A jugar";
  public showOption: OptionsGame[] = [
    {
    name: "papel",
    img: "./assets/Papel.png"
    },
    {
      name: "tijera",
      img: "./assets/Tijeras.png"
    },
    {
      name: "piedra",
      img: "./assets/Piedra.png"
    },
  ];

  asignOption(option:string):void{
    this.player1 = option;
    console.log(this.player1)

  }
pptEnAccion():void{
  console.log(this.player2)
  const randomIndex = Math.floor(Math.random() * this.showOption.length);
  const opcionAleatoria = this.showOption[randomIndex];
  this.player2 = opcionAleatoria.name
  if(this.player1 == this.player2){
    this.resultado = "Empate"
  } else {
    if (this.player1 == "papel" && this.player2 == "piedra" || this.player1 == "piedra" && this.player2 == "tijera" || this.player1 == "tijera" && this.player2 == "papel"){
      this.resultado = "Gana el Jugador 1"
    }else {
      if (this.player1 == "tijera" && this.player2 == "piedra" || this.player1 == "piedra" && this.player2 == "papel" || this.player1 == "papel" && this.player2 == "tijera"){
        this.resultado = "Gana el Jugador 2"
      }
    }
  }
}





}

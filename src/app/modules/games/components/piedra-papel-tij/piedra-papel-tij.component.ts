import {Component} from '@angular/core';
import {OptionsGame} from '../../interfaces/options-game'

@Component({
  selector: 'app-piedra-papel-tij',
  templateUrl: './piedra-papel-tij.component.html',
  styleUrls: ['./piedra-papel-tij.component.css']
})
export class PiedraPapelTijComponent {

  timeLeft: number = 5;
  interval: any;
  public player1 : string = "";
  public player2 : string = "";
  puntajeP1 = 0
  puntajeP2 = 0
  public resultado: string = "A jugar";
  public isDisabled: boolean = true;
  public showOption: OptionsGame[] = [
    {
      name: "papel",
      img: "./assets/Papel.png",
    },
    {
      name: "tijera",
      img: "./assets/Tijeras.png",
    },
    {
      name: "piedra",
      img: "./assets/Piedra.png",
    },
  ];

  relacionesDeVictoria: any = {
    papel: "piedra",
    piedra: "tijera",
    tijera: "papel"
  };

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 5;
      }
    },1000)
  }

  asignOption(option:string):void{
    this.player1 = option;
    const randomIndex = Math.floor(Math.random() * this.showOption.length);
    const opcionAleatoria = this.showOption[randomIndex];
    this.player2 = opcionAleatoria.name
    if (this.player1 === this.player2)
    {
      this.resultado = "Empate";
    } else
      if (this.relacionesDeVictoria[this.player1] === this.player2)
      {
        this.resultado = "Gana el Jugador 1";
        this.puntajeP1++;
      } else {
        this.resultado = "Gana el Jugador 2";
        this.puntajeP2++;
      }
    if (this.timeLeft == 0)
    {
      this.isDisabled = true;
      clearInterval(this.interval);
      this.timeLeft = 5;
    }
  }

  pptEnAccion():void{
    this.startTimer()
    this.isDisabled = false;
    this.puntajeP1 = 0;
    this.puntajeP2 = 0;
  }

}

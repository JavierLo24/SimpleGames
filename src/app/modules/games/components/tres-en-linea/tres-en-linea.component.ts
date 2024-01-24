import { Component } from '@angular/core';
import {OptionsGame} from '../../interfaces/options-game'

@Component({
  selector: 'app-tres-en-linea',
  templateUrl: './tres-en-linea.component.html',
  styleUrls: ['./tres-en-linea.component.css']
})

export class TresEnLineaComponent {

  options: OptionsGame[]=[
    {
      name: "X",
      img: "./assets/X.png",
    },
    {
      name: "O",
      img: "./assets/O.png",
    },
  ];

  board = [
    [{ player: "" }, { player: "" }, { player: "" }],
    [{ player: "" }, { player: "" }, { player: "" }],
    [{ player: "" }, { player: "" }, { player: "" }],
  ];

  posActual: string = this.options[0].img;
  texto = "";
  finished = false;
  draw = 0;
  puntajeP1 = 0;
  puntajeP2 = 0;

  turno(row: number, col: number){
    if (!this.board[row][col].player) {
      console.log(this.draw)
      if (this.drawRound()) return
      this.board[row][col].player = this.posActual;
      this.checkWinner();
      this.posActual = this.posActual === this.options[0].img  ? this.options[1].img : this.options[0].img;
      this.draw++
    }
}

  checkWinner(){
    for (let i = 0; i < this.board.length; i++){
      if (this.board[2][0].player &&
        this.board[2][0].player === this.board[1][1].player &&
        this.board[2][0].player === this.board[0][2].player) {
        if (this.board[2][0].player === this.options[0].img){
          this.texto = `Gana el jugador ${this.options[0].name}`;
          this.puntajeP1++
        } else {
          this.texto = `Gana el jugador ${this.options[1].name}`
          this.puntajeP2++
        }
            this.finished = true
          return;
      }
      if (this.board[0][0].player &&
        this.board[0][0].player === this.board[1][1].player &&
        this.board[0][0].player === this.board[2][2].player) {
        if (this.board[0][0].player === this.options[0].img){
          this.texto = `Gana el jugador ${this.options[0].name}`;
          this.puntajeP1++
        } else {
          this.texto = `Gana el jugador ${this.options[1].name}`
          this.puntajeP2++
        }
        this.finished = true
          return;
      }
      if (this.board[i][0].player &&
        this.board[i][0].player === this.board[i][1].player &&
        this.board[i][0].player === this.board[i][2].player){

        if (this.board[i][0].player === this.options[0].img){
          this.texto = `Gana el jugador ${this.options[0].name}`;
          this.puntajeP1++
        } else {
          this.texto = `Gana el jugador ${this.options[1].name}`
          this.puntajeP2++
        }
        this.finished = true
        return
      }
      if (this.board[0][i].player &&
        this.board[0][i].player === this.board[1][i].player &&
        this.board[0][i].player === this.board[2][i].player){
        if (this.board[0][i].player === this.options[0].img){
          this.texto = `Gana el jugador ${this.options[0].name}`;
          this.puntajeP1++
        } else {
          this.texto = `Gana el jugador ${this.options[1].name}`
          this.puntajeP2++
        }
        this.finished = true
        return
      }
      }
    }

    drawRound(): boolean{
    let empate;
      this.draw === 9 ? empate = true : empate = false
      return empate;
    }

    resetBoard():void{
      this.posActual = this.options[0].img
      this.finished = false
      this.draw = 0

    this.board = [
      [{ player: "" }, { player: "" }, { player: "" }],
      [{ player: "" }, { player: "" }, { player: "" }],
      [{ player: "" }, { player: "" }, { player: "" }],
    ];
      this.puntajeP1 = 0
      this.puntajeP2 = 0
      this.texto = ""
    }

  nextRound():void{
    this.posActual = this.options[0].img
    this.finished = false
    this.draw = 0
    this.texto = ""
    this.board = [
      [{ player: "" }, { player: "" }, { player: "" }],
      [{ player: "" }, { player: "" }, { player: "" }],
      [{ player: "" }, { player: "" }, { player: "" }],
    ];
  }



}

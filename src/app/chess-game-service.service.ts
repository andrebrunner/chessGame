import {EventEmitter, Injectable, Output} from '@angular/core';
import {SingleGame} from "./single-game";

@Injectable({
  providedIn: 'root'
})
export class ChessGameServiceService {

  private games : SingleGame[] = [];
  private selectedGame : SingleGame = new SingleGame("", "", 0);

  @Output() informSelectedGame = new EventEmitter<SingleGame>();

  constructor() {
    this.initGames();
  }


  initGames() {
    this.games.push(new SingleGame('a', 'b', 0));
    this.games.push(new SingleGame('c', 'd', 0));
    this.games.push(new SingleGame('e', 'f', 0));
    this.games.push(new SingleGame('g', 'h', 0));
    this.games.push(new SingleGame('i', 'j', 0));
    this.games.push(new SingleGame('k', 'l', 0));
  }

   getGames() : SingleGame[]{
    return this.games;
  }

  public setSelectedGame(game:SingleGame) {
    this.selectedGame = game;
    this.informSelectedGame.emit(this.selectedGame);
  }

}

import { Injectable } from '@angular/core';
import {SingleGame} from "./single-game";

@Injectable({
  providedIn: 'root'
})
export class ChessGameServiceService {

  private games : SingleGame[] = [];

  constructor() {
    this.initGames();
  }


  initGames() {
    this.games.push(new SingleGame('a', 'b', 0));
  }

   getGames() : SingleGame[]{
    return this.games;
  }


}

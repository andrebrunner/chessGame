import { Component, OnInit } from '@angular/core';
import {ChessGameServiceService} from "../chess-game-service.service";
import {SingleGame} from "../single-game";

@Component({
  selector: 'app-chessgame',
  templateUrl: './chessgame.component.html',
  styleUrls: ['./chessgame.component.css']
})
export class ChessgameComponent implements OnInit {

  games : SingleGame[] = [];
  gameOne : SingleGame = new SingleGame("", "", 1);

  constructor(private cg: ChessGameServiceService) {
    this.games = cg.getGames();
  }

  ngOnInit(): void {
    this.gameOne = this.games[0];
  }



}

import { Component, OnInit } from '@angular/core';
import {ChessGameServiceService} from "../chess-game-service.service";
import {SingleGame} from "../single-game";

@Component({
  selector: 'app-chessgame',
  templateUrl: './chessgame.component.html',
  styleUrls: ['./chessgame.component.css']
})
export class ChessgameComponent implements OnInit {

  myGameService: ChessGameServiceService;
  game : SingleGame = new SingleGame("", "", 0);

  constructor(private cg: ChessGameServiceService) {
    this.myGameService = cg;
  }

  ngOnInit(): void {
    this.myGameService
      .informSelectedGame
      .subscribe(selectedGame => {
        this.game = selectedGame;
      });
  }



}

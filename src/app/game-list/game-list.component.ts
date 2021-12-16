import { Component, OnInit } from '@angular/core';
import {ChessGameServiceService} from "../chess-game-service.service";
import {SingleGame} from "../single-game";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

   games : SingleGame[] = [];

  constructor(private cg: ChessGameServiceService) {

    this.games = cg.getGames();
  }

  ngOnInit(): void {

  }

}

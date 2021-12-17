import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChessGameServiceService} from "../chess-game-service.service";
import {SingleGame} from "../single-game";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

   games : SingleGame[] = [];

   myGameService: ChessGameServiceService;




  constructor(private cg: ChessGameServiceService) {
    this.myGameService = cg;
    this.games = this.myGameService.getGames();
  }

  ngOnInit(): void {

  }

  onSelect(game:SingleGame) {
    this.myGameService.setSelectedGame(game);
    console.log(game);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ChessgameComponent } from './chessgame/chessgame.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessgameComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

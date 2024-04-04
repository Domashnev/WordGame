import { Component, OnInit } from '@angular/core'
import { Game, GameOptions, GameType, Language } from './models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  game: any

  ngOnInit() {
    const opt: GameOptions = {language: Language.Русский, type: GameType.Scrabble}
    this.game = new Game(opt)
    const let1 = this.game.bag.getLetterFromBag(this.game)
    const let2 = this.game.bag.getLetterFromBag(this.game)
    this.game.field.cells[22].letter = let1
    this.game.field.cells[34].letter = let2
  }
}

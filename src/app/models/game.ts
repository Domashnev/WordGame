import {Letter} from './letter'
import { Field } from './field';
import { cellInfoText, scrabbleFieldDescription } from './fieldDescriptions';
import {Bag} from './bag'
import {allRussianLetters} from './letterDescription'

export enum GameStatus {
  'NUOVO', 'INIZIATO', 'NELL_PROCESSO', 'COMPLETATO'
}
export enum Language {
  'Русский', 'English', 'Italiano', 'Spanish'
}

export class Game {
  players: any
  users: string[] = []
  language: Language
  field: Field
  bag: Bag

  constructor(language: Language) {
    this.language =language ?? Language.Русский
    scrabbleFieldDescription.cellsInfoText = cellInfoText[this.language]
    this.field = new Field(scrabbleFieldDescription)
    this.bag = new Bag()
  }

}

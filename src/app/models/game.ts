import {Letter} from './letter'
import { Field } from './field';
import { cellInfoText, scrabbleFieldDescription } from './fieldDescriptions';

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

  constructor(language: Language) {
    this.language =language ?? Language.Русский
    scrabbleFieldDescription.cellsInfoText = cellInfoText[this.language]
    this.field = new Field(scrabbleFieldDescription)
  }

}

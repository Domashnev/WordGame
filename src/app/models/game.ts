import { Field } from './field';
import { cellInfoText, scarabeoFieldDescription, scrabbleFieldDescription } from './fieldDescriptions';
import {Bag} from './bag'
import { allLetters, allScarabeoLetters, LetterType } from './letterDescription'

export enum GameStatus {
  'NUOVO', 'INIZIATO', 'NELL_PROCESSO', 'COMPLETATO'
}
export enum Language {
  'Русский', 'English', 'Italiano', 'Spanish'
}
export enum GameType { 'Scrabble', 'Erudit', 'Scarabeo'}

export interface GameOptions {
  language: Language;
  type: GameType;
  duplicato?: boolean;
  blitz?: number; // minutes
}

export class Game {
  players: any
  users: string[] = []
  field: Field
  bag: Bag
  options: GameOptions
  theme: any

  constructor(gameOptions: GameOptions) {
    this.options = gameOptions
    let fieldDescr
    if (gameOptions.type === GameType.Scarabeo) {
      fieldDescr = scarabeoFieldDescription
    } else {
      fieldDescr = scrabbleFieldDescription
      fieldDescr.cellsInfoText = cellInfoText[gameOptions.language]
      fieldDescr.letters = allLetters[gameOptions.language]
    }

    this.field = new Field(fieldDescr)
    this.bag = new Bag(fieldDescr.letters)
  }

  getAllLetters() : LetterType[] {
    return allLetters[this.options.language]
  }

}

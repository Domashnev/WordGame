import {Letter} from './letter'
import {allRussianLetters} from './gameDescriptions'

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

  constructor(language: Language) {
    this.language =language
  }

}

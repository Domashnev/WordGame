import { GameOptions, Language } from './game'
import {
  allEnglishLetters,
  allItalianLetters,
  allRussianLetters,
  allSpanishLetters,
  LetterType
} from './letterDescription'

export class Letter {
  char: string;
  cost: number;
  showChar?: string;

  constructor(ch: string, allLetters: LetterType[]) {
    const fLetter = allLetters.find(item => item.char === ch.toUpperCase())
    if( fLetter ){
      this.char = fLetter.char;
      this.cost = fLetter.cost;
    } else {
      throw Error(ch + ' - letter is not found in alphabet!');
    }

  }

}




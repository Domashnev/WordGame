import {Language} from './game'
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

  constructor(ch: string, language: Language) {
    const fLetter = this.getAllLetters(language).find(item => item.char === ch.toUpperCase())
    if( fLetter ){
      this.char = fLetter.char;
      this.cost = fLetter.cost;
    } else {
      throw Error(ch + ' - letter is not found in alphabet!');
    }

  }

  getAllLetters(language: Language): LetterType[] {
    switch (language) {
      case Language.Русский: return allRussianLetters;
      case Language.English: return allEnglishLetters;
      case Language.Italiano:return allItalianLetters;
      case Language.Spanish: return allSpanishLetters;
    }
  }
/*
  private fareLetteraDelCell(cell: Cell) {
    if (cell.letter && cell.letter.char) {
      if (cell.letter.char == ' ') { return '?'; }
      if (cell.letter.cost == 0) { return cell.letter.char.toLowerCase(); }
      return cell.letter.char.toUpperCase();
    } else { return ' '; }
  }

  private fareCampoLetteraDelChar(char: string): Letter {
    if (char && char !== ' ') {
      if (char === '?') { return { char: ' ', cost: 0 }; }
      if (char === char.toLowerCase()) { return { char, cost: 0 }; }

      return this.makeLetter(char);
    } else { return null; }
  }
*/
}




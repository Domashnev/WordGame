import {Language} from './game'

export class Letter {
  char: string;
  cost: number;
  viewChar?: string;

  constructor(ch: string, language: Language) {
    const fLetter = this.getAllLetters(language).find(item => item.char == ch.toUpperCase())
    if( fLetter ){
      this.char = fLetter.char;
      this.cost = fLetter.cost;
    } else {
      throw Error('Letter is not found in alphabet!');
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

  private makeLetter(char: string): Letter {
    const lettera = Object.assign({},
      this.allLetters.find(item => item.char == char.toUpperCase()));
    if (lettera) { delete lettera.num; }
    return lettera;
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

export interface LetterType {
  char: string;
  cost: number;
  num: number;
}
export const Vocals = ['АЕЁИОУЫЭЮЯ', 'AEIOU', 'AEIOU', 'AEIOU'];  // всего 42 гласных фишек в русском + 2 пустышки

export const allRussianLetters: LetterType[] = [
  { char: 'А', cost: 1, num: 8 },
  { char: 'Б', cost: 3, num: 2 },
  { char: 'В', cost: 1, num: 4 },
  { char: 'Г', cost: 3, num: 2 },
  { char: 'Д', cost: 2, num: 4 },
  { char: 'Е', cost: 1, num: 8 },
  { char: 'Ё', cost: 3, num: 1 },
  { char: 'Ж', cost: 5, num: 1 },
  { char: 'З', cost: 5, num: 2 },
  { char: 'И', cost: 1, num: 5 },
  { char: 'Й', cost: 4, num: 1 },
  { char: 'К', cost: 2, num: 4 },
  { char: 'Л', cost: 2, num: 4 },
  { char: 'М', cost: 2, num: 3 },
  { char: 'Н', cost: 1, num: 5 },
  { char: 'О', cost: 1, num: 10 },
  { char: 'П', cost: 2, num: 4 },
  { char: 'Р', cost: 1, num: 5 },
  { char: 'С', cost: 1, num: 5 },
  { char: 'Т', cost: 1, num: 5 },
  { char: 'У', cost: 2, num: 4 },
  { char: 'Ф', cost: 10, num: 1 },
  { char: 'Х', cost: 5, num: 1 },
  { char: 'Ц', cost: 5, num: 1 },
  { char: 'Ч', cost: 5, num: 1 },
  { char: 'Ш', cost: 8, num: 1 },
  { char: 'Щ', cost: 10, num: 1 },
  { char: 'Ъ', cost: 10, num: 1 },
  { char: 'Ы', cost: 4, num: 2 },
  { char: 'Ь', cost: 3, num: 2 },
  { char: 'Э', cost: 8, num: 1 },
  { char: 'Ю', cost: 8, num: 1 },
  { char: 'Я', cost: 3, num: 2 },
  { char: ' ', cost: 0, num: 2 }
];
/*
2 blank tiles (scoring 0 points)
1 point: E ×12, A ×9, I ×9, O ×8, N ×6, R ×6, T ×6, L ×4, S ×4, U ×4
2 points: D ×4, G ×3
3 points: B ×2, C ×2, M ×2, P ×2
4 points: F ×2, H ×2, V ×2, W ×2, Y ×2
5 points: K ×1
8 points: J ×1, X ×1
10 points: Q ×1, Z ×1
*/
export const allEnglishLetters: LetterType[] = [
  { char: 'A', cost: 1, num: 9 },
  { char: 'B', cost: 3, num: 2 },
  { char: 'C', cost: 3, num: 2 },
  { char: 'D', cost: 2, num: 4 },
  { char: 'E', cost: 1, num: 12 },
  { char: 'F', cost: 4, num: 2 },
  { char: 'G', cost: 2, num: 3 },
  { char: 'H', cost: 4, num: 2 },
  { char: 'I', cost: 1, num: 9 },
  { char: 'J', cost: 8, num: 1 },
  { char: 'K', cost: 5, num: 1 },
  { char: 'L', cost: 1, num: 4 },
  { char: 'M', cost: 3, num: 2 },
  { char: 'N', cost: 1, num: 6 },
  { char: 'O', cost: 1, num: 8 },
  { char: 'P', cost: 3, num: 2 },
  { char: 'Q', cost: 10, num: 1 },
  { char: 'R', cost: 1, num: 6 },
  { char: 'S', cost: 1, num: 4 },
  { char: 'T', cost: 1, num: 6 },
  { char: 'U', cost: 1, num: 4 },
  { char: 'V', cost: 4, num: 2 },
  { char: 'W', cost: 4, num: 2 },
  { char: 'X', cost: 8, num: 1 },
  { char: 'Y', cost: 4, num: 2 },
  { char: 'Z', cost: 10, num: 1 },
  { char: ' ', cost: 0, num: 2 }
];
/*Italian
2 blank tiles (scoring 0 points)
1 point: O ×15, A ×14, I ×12, E ×11
2 points: C ×6, R ×6, S ×6, T ×6
3 points: L ×5, M ×5, N ×5, U ×5
5 points: B ×3, D ×3, F ×3, P ×3, V ×3
8 points: G ×2, H ×2, Z ×2
10 points: Q ×1
*/
export const allItalianLetters: LetterType[] = [
  { char: 'A', cost: 1, num: 14 },
  { char: 'B', cost: 5, num: 3 },
  { char: 'C', cost: 2, num: 6 },
  { char: 'D', cost: 5, num: 3 },
  { char: 'E', cost: 1, num: 11 },
  { char: 'F', cost: 5, num: 3 },
  { char: 'G', cost: 8, num: 2 },
  { char: 'H', cost: 8, num: 2 },
  { char: 'I', cost: 1, num: 12 },
  { char: 'L', cost: 3, num: 5 },
  { char: 'M', cost: 3, num: 5 },
  { char: 'N', cost: 3, num: 5 },
  { char: 'O', cost: 1, num: 15 },
  { char: 'P', cost: 5, num: 3 },
  { char: 'Q', cost: 10, num: 1 },
  { char: 'R', cost: 2, num: 6 },
  { char: 'S', cost: 2, num: 6 },
  { char: 'T', cost: 2, num: 6 },
  { char: 'U', cost: 3, num: 5 },
  { char: 'V', cost: 5, num: 3 },
  { char: 'Z', cost: 8, num: 2 },
  { char: ' ', cost: 0, num: 2 }
];

/* Italian  Scarabeo */
export const allScarabeoLetters: LetterType[] = [
  { char: 'A', cost: 1, num: 12 },
  { char: 'B', cost: 4, num: 4 },
  { char: 'C', cost: 1, num: 7 },
  { char: 'D', cost: 4, num: 4 },
  { char: 'E', cost: 1, num: 12 },
  { char: 'F', cost: 4, num: 4 },
  { char: 'G', cost: 4, num: 4 },
  { char: 'H', cost: 8, num: 2 },
  { char: 'I', cost: 1, num: 12 },
  { char: 'L', cost: 2, num: 6 },
  { char: 'M', cost: 2, num: 6 },
  { char: 'N', cost: 2, num: 6 },
  { char: 'O', cost: 1, num: 12 },
  { char: 'P', cost: 3, num: 4 },
  { char: 'Q', cost: 10, num: 2 },
  { char: 'R', cost: 1, num: 7 },
  { char: 'S', cost: 1, num: 7 },
  { char: 'T', cost: 1, num: 7 },
  { char: 'U', cost: 4, num: 4 },
  { char: 'V', cost: 4, num: 4 },
  { char: 'Z', cost: 8, num: 2 },
  { char: ' ', cost: 0, num: 2 }
];

export const allSpanishLetters: LetterType[] = [
  { char: ' ', cost: 0, num: 2 },
  { char: 'A', cost: 1, num: 12 },
  { char: 'E', cost: 1, num: 12 },
  { char: 'I', cost: 1, num: 6 },
  { char: 'O', cost: 1, num: 9 },
  { char: 'S', cost: 1, num: 6 },
  { char: 'N', cost: 1, num: 5 },
  { char: 'R', cost: 1, num: 5 },
  { char: 'U', cost: 1, num: 5 },
  { char: 'L', cost: 1, num: 4 },
  { char: 'T', cost: 1, num: 4 },
  { char: 'D', cost: 2, num: 5},
  { char: 'G', cost: 2, num: 2 },
  { char: 'C', cost: 3, num: 4 },
  { char: 'B', cost: 3, num: 2 },
  { char: 'M', cost: 3, num: 2 },
  { char: 'P', cost: 3, num: 2 },
  { char: 'H', cost: 4, num: 2 },
  { char: 'F', cost: 4, num: 1 },
  { char: 'V', cost: 4, num: 1 },
  { char: 'Y', cost: 4, num: 1 },
  { char: 'Q',  cost: 5, num: 1 },
  { char: 'CH', cost: 5, num: 1 },
  { char: 'J',  cost: 6, num: 1 },
  { char: 'LL', cost: 6, num: 1 },
  { char: 'Ñ',  cost: 6, num: 1 },
  { char: 'RR', cost: 6, num: 1 },
  { char: 'X',  cost: 6, num: 1 },
  { char: 'Z', cost: 10, num: 1 },
];

/*
Spanish-language sets sold outside North America use these 100 tiles:

2 blank tiles (scoring 0 points)
1 point: A ×12, E ×12, O ×9, I ×6, S ×6, N ×5, R ×5, U ×5, L ×4, T ×4
2 points: D ×5, G ×2
3 points: C ×4, B ×2, M ×2, P ×2
4 points: H ×2, F ×1, V ×1, Y ×1
5 points: CH ×1, Q ×1
8 points: J ×1, LL ×1, Ñ ×1, RR ×1, X ×1
10 points: Z ×1
Stress accents and diaereses are disregarded. The letters K and W are absent since these two letters are only used in words of foreign origin. According to FISE (Federación Internacional de Scrabble en Español) rules, a blank cannot be used to represent K or W.

Using one C and one H tile in place of the CH tile, two L tiles for the LL tile, or two R tiles for the RR tile is also not allowed in Spanish Scrabble.[46]
 */


import {Letter} from './letter'
import {LetterType} from './letterDescription'
import { Game } from './game';

export class Bag {
  sacco: string;

  constructor(allLetters: LetterType[]) {
    const letters: string[] = []
    allLetters.forEach(l => {
      for( let i=0; i < (l.num ?? 1); i++){
        letters.push(l.char)
      }
    })
    this.sacco = this.shuffle(letters, 3).join('')
  }

  public shuffle(arr: Array<any>, count: number) {
    if (arr.length < 3) { return arr; }
    for (let c = 0; c < count; c++) {
      for (let i = 0; i < arr.length; i++) {
        let newIndex = i;
        while (newIndex == i || newIndex >= arr.length) {
          newIndex = Math.floor((Math.random() * arr.length));
        }
        [arr[i], arr[newIndex]] = [arr[newIndex], arr[i]];
      }
    }
    return arr;
  }

  getLetterFromBag(game: Game): Letter | undefined {
    const fromBag = this.getCharFromBag()
    const letter = game.getAllLetters().find(l => l.char === fromBag)
    return letter
  }

  private getCharFromBag(): string | undefined {
    let fromBag: string
    if( !this.sacco.length ) return undefined
    if (this.sacco.length > 5) {
      const randomIndex = Math.floor((Math.random() * this.sacco.length));
      fromBag = this.sacco[randomIndex];
      this.sacco = this.sacco.slice(0, randomIndex) + this.sacco.slice(randomIndex+1);
    } else {
      fromBag = this.sacco[this.sacco.length-1]
      this.sacco = this.sacco.slice(0, -1)
    }
    return fromBag
  }

  public putLetterToBag(letter: Letter) {
    this.sacco += letter.char;
  }

}

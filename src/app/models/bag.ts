import {allLetters } from './letterDescription'
import {Language} from './game'

export class Bag {
  sacco: string;

  constructor(language: Language) {
    this.sacco = ''
    allLetters[language].forEach(l => this.sacco += l.char.repeat(l.num))
    this.sacco = this.shuffle(this.sacco.split(''), 3).join('')
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

}

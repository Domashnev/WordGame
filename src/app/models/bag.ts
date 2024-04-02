import {Letter} from './letter'

export class Bag {
  sacco: string;
  letters: Letter[];

  constructor(allLetters: Letter[]) {
    this.letters = []
    allLetters.forEach(l => {
      for( let i=0; i < (l.num ?? 1); i++){
        const newLetter = new Letter(l.char, l.cost)
        this.letters.push(newLetter)
      }
    })
    this.sacco = this.letters.map(l => l.char).join('')
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

  getLetterFromBag(): Letter | null {
    let fromBag: Letter | null = null
    if (this.letters.length > 5) {
      const randomIndex = Math.floor((Math.random() * this.letters.length));
      fromBag = this.letters[randomIndex];
      this.letters.splice(randomIndex, 1);
    } else if (this.letters.length) {
      fromBag = this.letters.pop() ?? null;
    }
    return fromBag
  }

  public putLetterInBag(letter: Letter) {
    this.letters.push(letter);
  }

}

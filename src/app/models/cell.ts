import {Letter} from './letter'

export class Cell {
  id: number;
  row?: number;
  col?: number;
  disable: boolean;  // нельзя менять
  bonus?: number;
  styles: string[];
  info?: string;
  letter?: Letter;
  img?: string;

  constructor(id: number, row: number, col: number, letter?: Letter) {
    this.id = id
    this.row = row
    this.col = col
    this.disable = false
    if (letter) this.letter = letter
    this.bonus = 1
    this.styles = []
  }

}

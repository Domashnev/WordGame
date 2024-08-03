import {Cell} from './cell'
import {CellInfo, FieldDescription} from './fieldDescriptions'
import { Letter } from './letter';

export class Field {
  cells: Cell[];
  size: number;
  backgroundImageURL?: string;

  constructor(fd: FieldDescription) {
    this.cells = [];
    this.size = fd.fieldSize;
    for (let r = 1; r <= fd.fieldSize; r++) {
      for (let c = 1; c <= fd.fieldSize; c++) {
        const cell = new Cell((r - 1) * fd.fieldSize + c - 1, r, c)
        if ( fd.letterBy2Cells.includes('r' + r + 'c' + c) ) {
            cell.bonus = 2;
            cell.styles = ['doubleLetter'];
            cell.info = fd.cellsInfoText[CellInfo.DoubleLetter]; // Б*2
        }else if ( fd.letterBy3Cells.includes('r' + r + 'c' + c)){
            cell.bonus = 3;
            cell.styles = ['tripleLetter'];
            cell.info = fd.cellsInfoText[CellInfo.TripleLetter]; // Б*3
        } else if ( fd.wordBy2Cells.includes('r' + r + 'c' + c)){
            cell.bonus = 20;
            cell.styles = ['doubleWord'];
            cell.info = fd.cellsInfoText[CellInfo.DoubleWord];   // C*2
          }else if ( fd.wordBy3Cells.includes('r' + r + 'c' + c)){
            cell.bonus = 30;
            cell.styles = ['tripleWord'];
            cell.info = fd.cellsInfoText[CellInfo.TripleWord];
          }

        // if ( gameState.theme?.fieldBackground ) { cell.styles.push('cell-over-image'); }
        this.cells.push(cell);
      }
    }
  }

  // ряд, начиная с 1
  getRow(rowNumber: number): Cell[] {
    return this.cells.filter(r => r.row === rowNumber)
  }

  getRowNumbers(): number[] {
    const rn = []
    for( let i=1; i<=this.size; i++) rn.push(i)
    return rn
  }

}

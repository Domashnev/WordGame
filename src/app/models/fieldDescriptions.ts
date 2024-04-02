import { allScarabeoLetters } from './letter';

export enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
export enum HorVer {
  Horizontal,
  Vertical
}

export enum CellInfo { DoubleLetter, DoubleWord, TripleLetter, TripleWord}
export const cellInfoText = [
  ['Б*2', 'С*2', 'Б*3', 'С*3'],
  ['DL', 'DW', 'TL', 'TW'],
  ['DL', 'DP', 'TL', 'TP'],
  ['DL', 'DW', 'TL', 'TW'],
];

export interface FieldDescription {
  fieldSize: number;
  plateSize: number;
  letters: any[];
  cellsInfoText: string[];        // Ex. ['2L', '3L', '2P', '3P']
  letterBy2Cells: string[];
  letterBy3Cells: string[];
  wordBy2Cells: string[];
  wordBy3Cells: string[];
}

export const scrabbleFieldDescription: FieldDescription = {
    fieldSize: 15,
    plateSize: 7,
    letters: allScarabeoLetters,
    cellsInfoText: cellInfoText[0],
    letterBy2Cells: ['r1c4', 'r1c12', 'r3c7', 'r3c9', 'r4c1', 'r4c8', 'r4c15',
      'r7c3', 'r7c7', 'r7c9', 'r7c13', 'r8c4', 'r8c12', 'r9c3', 'r9c7', 'r9c9', 'r9c13'
      , 'r12c1', 'r12c8', 'r12c15', 'r13c7', 'r13c9', 'r15c4', 'r15c12'],
    letterBy3Cells: ['r2c6', 'r2c10', 'r6c2', 'r6c6', 'r6c10', 'r6c14',
                    'r10c2', 'r10c6', 'r10c10', 'r10c14', 'r14c6', 'r14c10'],
    wordBy2Cells: ['r2c2', 'r3c3', 'r4c4', 'r5c5',  'r2c14', 'r3c13', 'r4r12', 'r2c11',
                    'r8c8',
                    'r11c5', 'r12c4', 'r13c3', 'r14c2', 'r11c11', 'r12c12', 'r13c13', 'r14c14'],
    wordBy3Cells: ['r1c1', 'r1c8', 'r1c15', 'r8c1', 'r8c15', 'r15c1', 'r15c8', 'r15c15'],
}

export const scarabeoFieldDescription: FieldDescription = {
    fieldSize: 17,
    plateSize: 8,
    letters: allScarabeoLetters,
    cellsInfoText: ['2L', '3L', '2P', '3P'],
    letterBy2Cells:  [
      'r1c5', 'r1c13', 'r3c8', 'r3c10',
      'r4c9', 'r5c1', 'r5c17',
      'r8c2', 'r8c8', 'r8c10', 'r8c15',
      'r10c2', 'r10c8', 'r10c10', 'r10c15',
      'r13c1', 'r13c17',
      'r14c9', 'r15c8', 'r3c10', 'r17c5', 'r17c13'
    ],
    letterBy3Cells: [
      'r2c7', 'r2c11',
      'r7c2', 'r7c7', 'r7c11', 'r7c15',
      'r11c2', 'r11c7', 'r11c11', 'r11c15',
      'r16c7', 'r16c11'],
    wordBy2Cells: [ 'r2c2', 'r3c3', 'r4c4', 'r5c5', 'r6c6',
      'r2c16', 'r3c15', 'r4c14', 'r5c13', 'r6c12',
      'r9c9',
      'r16c2', 'r15c3', 'r14c4', 'r13c5', 'r12c6',
      'r16c16', 'r15c15', 'r14c14', 'r13c13', 'r12c12'],
    wordBy3Cells: ['r1c1', 'r1c9', 'r1c17', 'r9c1', 'r9c17', 'r17c1', 'r17c9', 'r17c17'],
}

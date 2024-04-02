import {Letter} from './letter'
import {allScarabeoLetters} from './gameDescriptions'

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

export const scarabeoCellInfoText = ['2L', '3L', '2P', '3P'];
export const scarabeo3P = ['r1c1', 'r1c9', 'r1c17', 'r9c1', 'r9c17', 'r17c1', 'r17c9', 'r17c17'];
export const scarabeo2P =
  [ 'r2c2', 'r3c3', 'r4c4', 'r5c5', 'r6c6',
    'r2c16', 'r3c15', 'r4c14', 'r5c13', 'r6c12',
    'r9c9',
    'r16c2', 'r15c3', 'r14c4', 'r13c5', 'r12c6',
    'r16c16', 'r15c15', 'r14c14', 'r13c13', 'r12c12'];
export const scarabeo3L = [
  'r2c7', 'r2c11',
  'r7c2', 'r7c7', 'r7c11', 'r7c15',
  'r11c2', 'r11c7', 'r11c11', 'r11c15',
  'r16c7', 'r16c11'];
export const scarabeo2L = [
  'r1c5', 'r1c13',
  'r3c8', 'r3c10',
  'r4c9',
  'r5c1', 'r5c17',
  'r8c2', 'r8c8', 'r8c10', 'r8c15',
  'r10c2', 'r10c8', 'r10c10', 'r10c15',
  'r13c1', 'r13c17',
  'r14c9',
  'r15c8', 'r3c10',
  'r17c5', 'r17c13'
];

export const scarabeoFieldDescription: FieldDescription = {
  fieldSize: 17,
  plateSize: 8,
  letters: allScarabeoLetters,
  cellsInfoText: scarabeoCellInfoText,
  letterBy2Cells: scarabeo2L,
  letterBy3Cells: scarabeo3L,
  wordBy2Cells: scarabeo2P,
  wordBy3Cells: scarabeo3P,
}

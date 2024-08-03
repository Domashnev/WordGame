import { Component, Input } from '@angular/core';
import { Letter } from '../../models/letter';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  // @ts-ignore
  @Input({ required: true }) letter: Letter

}

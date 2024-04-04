import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../../models/field';
import { LetterComponent } from '../letter/letter.component';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [
    LetterComponent
  ],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent implements OnInit {
  // @ts-ignore
  @Input() field: Field;

  ngOnInit() {
  }
}

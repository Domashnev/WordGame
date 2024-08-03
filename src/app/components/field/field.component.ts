import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../../models/field';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [ ],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent implements OnInit {
  @Input() field: Field;

  ngOnInit() {
  }
}

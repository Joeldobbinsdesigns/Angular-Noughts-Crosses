import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <p class="marker">{{ value }}</p> `,
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}

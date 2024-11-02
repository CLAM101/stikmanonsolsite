import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stikman-border',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stikman-border.component.html',
  styleUrl: './stikman-border.component.css',
})
export class StikmanBorderComponent {
  stickmen: string[] = [];
  horizontal!: boolean;
  constructor() {
    this.stickmen = this.generateStickmanArray(19);
  }

  // input for horizontal
  @Input() set horizontalInput(value: boolean) {
    debugger;
    this.horizontal = value;
  }
  generateStickmanArray(numberOfRepeats: number) {
    const stickmen = [];

    for (let i = 0; i < numberOfRepeats; i++) {
      stickmen.push(
        '../../../assets/images/web-assets/what anime surprise.png'
      );
    }
    debugger;
    return stickmen;
  }
}

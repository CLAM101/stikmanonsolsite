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
    this.stickmen = this.generateStickmanArray(8);
  }

  stikimageArray: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fwhat%20anime%20surprise.png?alt=media&token=656de241-9f7c-4bd9-9376-39b91c4d1906',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fdirect_point_grimace.png?alt=media&token=c52fd67c-44c3-4c41-8344-a27a2939c8c2',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fhand_out_happy_.png?alt=media&token=6146eb7a-9fd8-4334-a14a-8d6bb98e9b58',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fhey%20jump.png?alt=media&token=06a25e60-ba90-4048-9271-bb0048719dca',
  ];
  // input for horizontal
  @Input() set horizontalInput(value: boolean) {
    this.horizontal = value;
  }
  generateStickmanArray(numberOfRepeats: number) {
    let stickmen: string[] = [];

    for (let i = 0; i < numberOfRepeats; i++) {
      stickmen = stickmen.concat(this.stikimageArray);
    }

    return stickmen;
  }
}

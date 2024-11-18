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
    this.stickmen = this.generateStickmanArray(3);
  }

  stikimageArray: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fhands-up.webp?alt=media&token=66d5e8e5-e5bf-4aff-8cd2-48c662124654',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fhard-walk.webp?alt=media&token=16eee743-7eb7-47e8-ad7c-73ea464efc80',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fjump-funny-face.webp?alt=media&token=343e3cf2-56fc-45e2-9e8a-4f027d4d4a1b',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fjump-point.webp?alt=media&token=108a6842-8279-4cb0-91ca-251a09c63098',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Frunning.webp?alt=media&token=8ae9bdcf-5a56-4329-a8c4-61329ccc405c',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fshow-hand.webp?alt=media&token=fc150362-b6cf-41ff-ab29-fc7a450acc4b',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fsmall-fingers.webp?alt=media&token=b7ca1e8e-4797-47e1-bf55-6ee453f09afe',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fstand-smile.webp?alt=media&token=35657e6e-c627-42be-bce9-9bc5bfd96301',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fwhat%20anime%20surprise.png?alt=media&token=656de241-9f7c-4bd9-9376-39b91c4d1906',
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

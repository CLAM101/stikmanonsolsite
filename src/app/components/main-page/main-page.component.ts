import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChildren,
  ViewChild,
  QueryList,
} from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private router: Router) {}

  isInView: boolean = false;
  playingAudio: boolean = false;
  @ViewChild('myElement') myElement!: ElementRef;

  @ViewChild('audioElement') audioElement!: ElementRef;

  // @HostListener('window:scroll', ['$event'])
  scrollToSection(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
    console.log('Scrolling to ' + el.getAttribute('name'));
  }

  // ngOnInit() {
  //   this.playAudio();
  // }

  ngAfterViewInit() {
    // Trigger the transition after the view has been initialized
    setTimeout(() => {
      this.isInView = true;
    }, 500); // Optional delay to ensure smooth rendering
  }

  pauseOrPlayAudio() {
    if (this.playingAudio) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }

  playAudio() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.play().catch((error) => {
      // Handle autoplay restrictions (like in mobile browsers)
      console.error('Audio autoplay failed:', error);
    });
    this.playingAudio = true;
  }

  pauseAudio() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.pause();
    this.playingAudio = false;
  }
}

import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChildren,
  ViewChild,
  QueryList,
  Directive,
} from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IsInViewDirective } from '../../directives/is-in-view.directive';
import { ImageGridComponent } from '../image-grid/image-grid.component';
import { GameEmbedComponent } from '../game-embed/game-embed.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    IsInViewDirective,
    ImageGridComponent,
    GameEmbedComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private router: Router) {}

  inViews: {
    [key in
      | 'home'
      | 'socials'
      | 'creatorhub'
      | 'memecenter'
      | 'tokenomics'
      | 'roadmap'
      | 'games'
      | 'howToBuy']: boolean;
  } = {
    home: false,
    socials: false,
    creatorhub: false,
    memecenter: false,
    tokenomics: false,
    roadmap: false,
    games: false,
    howToBuy: false,
  };

  playingAudio: boolean = false;
  playingVoAudio: boolean = false;

  @ViewChild('myElement') myElement!: ElementRef;

  @ViewChild('audioElement') audioElement!: ElementRef;
  @ViewChild('voAudioElement') voAudioElement!: ElementRef;

  // @HostListener('window:scroll', ['$event'])
  scrollToSection(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
    console.log('Scrolling to ' + el.getAttribute('name'));
  }

  // ngOnInit() {
  //   this.playAudio();
  // }

  // ngAfterViewInit() {
  //   // Trigger the transition after the view has been initialized
  // }

  inViewHandler(
    inView: boolean,
    location:
      | 'home'
      | 'socials'
      | 'creatorhub'
      | 'memecenter'
      | 'tokenomics'
      | 'roadmap'
      | 'games'
      | 'howToBuy'
  ) {
    if (inView) {
      this.inViews[location] = true;

      if (location === 'memecenter' && !this.playingVoAudio) {
        this.playVoAudio();
      }

      if (location !== 'memecenter' && this.playingVoAudio) {
        this.pauseVoAudio();
      }

      if (location === 'home' && !this.playingAudio) {
        this.playAudio();
      }

      if (location !== 'home' && this.playingAudio) {
        this.pauseAudio();
      }

      Object.keys(this.inViews).forEach((key) => {
        if (key !== location) {
          this.inViews[key as keyof typeof this.inViews] = false;
        }
      });
    }
  }

  pauseOrPlayAudio() {
    if (this.playingAudio) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }

  playVoAudio() {
    const audio = this.voAudioElement.nativeElement as HTMLAudioElement;
    audio.play().catch((error) => {
      // Handle autoplay restrictions (like in mobile browsers)
      console.error('Audio autoplay failed:', error);
    });
    this.playingVoAudio = true;
  }

  pauseVoAudio() {
    const audio = this.voAudioElement.nativeElement as HTMLAudioElement;
    audio.pause();
    this.playingVoAudio = false;
  }

  playAudio() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    this.playingAudio = true;
    audio.play().catch((error) => {
      this.playingAudio = false;
    });
  }

  pauseAudio() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.pause();
    this.playingAudio = false;
  }
}

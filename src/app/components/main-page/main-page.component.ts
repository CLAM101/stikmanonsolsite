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
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    IsInViewDirective,
    ImageGridComponent,
    GameEmbedComponent,
    BaseChartDirective,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
        this.handleScreenChange(result.matches);
      });
  }

  isSmallScreen: boolean = false;

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

  playingVideo: boolean = false;
  playingVoAudio: boolean = false;
  pieChartData = {
    labels: ['Marketing', 'Collabs', 'Liquidity', 'Presale'],
    datasets: [
      {
        label: 'Percentage',
        data: [5, 5, 5, 85],
        backgroundColor: ['#ffff', '#14F195', '#000000', '#9945FF'],
        hoverOffset: 4,
      },
    ],
  };
  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stikman Token Distribution',
      },
    },
  };

  @ViewChild('myElement') myElement!: ElementRef;
  @ViewChild('videoElement') videoElement!: ElementRef;

  @ViewChild('voAudioElement') voAudioElement!: ElementRef;

  scrollToSection(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
    console.log('Scrolling to ' + el.getAttribute('name'));
  }

  handleScreenChange(isSmallScreen: boolean) {
    console.log('Screen changed to ' + isSmallScreen);
  }

  clicked() {
    console.log('clicked');
  }

  // ngOnInit() {

  // }

  //ngAfterViewInit() {}

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

      // if (location === 'memecenter' && !this.playingVoAudio) {
      //   this.playVoAudio();
      // }

      // if (location !== 'memecenter' && this.playingVoAudio) {
      //   this.pauseVoAudio();
      // }

      // Object.keys(this.inViews).forEach((key) => {
      //   if (key !== location) {
      //     this.inViews[key as keyof typeof this.inViews] = false;
      //   }
      // });
    }
  }

  roadMapPanels = [
    {
      title: 'Phase 1',
      content: 'Launch of Stikman Token',
      icon: 'fas fa-rocket',
    },
    {
      title: 'Phase 2',
      content: 'Launch of Stikman NFTs',
      icon: 'fas fa-rocket',
    },
    {
      title: 'Phase 3',
      content: 'Launch of Stikman Games',
      icon: 'fas fa-rocket',
    },
    {
      title: 'Phase 4',
      content: 'Launch of Stikman Creator Hub',
      icon: 'fas fa-rocket',
    },
  ];

  pauseOrPlayVideo() {
    if (this.playingVideo) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  }

  isOpen = false;

  playVideo() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    video.loop = true;

    this.playingVideo = true;
    video.play().catch((error) => {
      this.playingVideo = false;
      console.error('Video autoplay failed:', error);
    });
  }

  pauseVideo() {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    video.pause();
    this.playingVideo = false;
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
}

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
import { CreatorHubComponent } from '../creator-hub/creator-hub.component';
import { StikmanBorderComponent } from '../stikman-border/stikman-border.component';

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
    CreatorHubComponent,
    StikmanBorderComponent,
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
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
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
  @ViewChild('creatorHub') creatorHub!: CreatorHubComponent;

  scrollToSection(el: HTMLElement, location?: string) {
    const yOffset = -20; // adjust as needed
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    if (location) {
      this.creatorHub.scrollToSection(location);
    }
  }

  handleScreenChange(isSmallScreen: boolean) {
    console.log('Screen changed to ' + isSmallScreen);
  }

  clicked() {
    console.log('clicked');
  }

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
      content: 'Launch Token',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fdegen-gasses-purple.png?alt=media&token=a3d5c094-cc8f-4b61-a433-3d76cc2f6bb5',
    },
    {
      title: 'Phase 2',
      content: 'Let Them Build',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fdegen-glasses-orange.png?alt=media&token=c52bc7a3-9654-4c5c-8a42-d3a30bbf50b2',
    },
    {
      title: 'Phase 3',
      content: 'Something Cool',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fdegen-gasses-purple.png?alt=media&token=a3d5c094-cc8f-4b61-a433-3d76cc2f6bb5',
    },
    {
      title: 'Phase 4',
      content: 'Something Cooler',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fdegen-glasses-orange.png?alt=media&token=c52bc7a3-9654-4c5c-8a42-d3a30bbf50b2',
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
    video.volume = 0.2;

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

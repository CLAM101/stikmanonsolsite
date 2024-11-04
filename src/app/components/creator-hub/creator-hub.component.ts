import { Component } from '@angular/core';
import { ImageGridComponent } from '../image-grid/image-grid.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { StikmanBorderComponent } from '../stikman-border/stikman-border.component';

@Component({
  selector: 'app-creator-hub',
  standalone: true,
  imports: [ImageGridComponent, CommonModule, StikmanBorderComponent],
  templateUrl: './creator-hub.component.html',
  styleUrl: './creator-hub.component.css',
})
export class CreatorHubComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  } //

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  photopeaURL!: SafeResourceUrl;
  showMemeEditor = false;
  isSmallScreen: boolean = false;

  assetDownLoadImages = [
    {
      name: 'St1kman Gangster glb',
      imgSrc: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kman%20Gangsta%20Cut.glb?alt=media&token=e2039459-c9b5-44a3-99d9-7c63cd23840f',
    },
    {
      name: 'St1kman fbx',
      imgSrc: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kman%20fbx%20Final.fbx?alt=media&token=dc8ea0e1-2c5a-4b76-9688-c94bb7e183ff',
    },
    {
      name: 'St1kman Mesh glb',
      imgSrc: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kman%20mesh%20Final.glb?alt=media&token=9fee6cd6-64c4-42d1-a7d0-8dee9f181c8e',
    },
    {
      name: 'St1kman Gangsta fxb',
      imgSrc: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kmangangsta%20fbx%20Cut.fbx?alt=media&token=3ebd8da7-8438-475a-bc4a-ffb6930599f9',
    },
    {
      name: 'St1kman psd',
      imgSrc: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/st1kman.psd?alt=media&token=47bf7cb0-a0e2-4e2d-9370-5e435ad833c9',
    },
  ];

  memeImages = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fcaveman-fucking-meme.png?alt=media&token=090c1bae-fe43-488d-8b7c-dd7912e649f6',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fdegen-gasses-purple.png?alt=media&token=a3d5c094-cc8f-4b61-a433-3d76cc2f6bb5',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fdegen-glasses-orange.png?alt=media&token=c52bc7a3-9654-4c5c-8a42-d3a30bbf50b2',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Ffuck-bear-meme.png?alt=media&token=2c75db04-b8df-42cf-85ec-60a371994aa5',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fgroup-photo-meme.png?alt=media&token=54397b6d-2d80-4f41-afb8-ae9d1d514156',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fmeme2.png?alt=media&token=09e57602-e07e-460f-943c-4fcdee9e4165',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fstrip-club-meme.png?alt=media&token=0798cde1-6d86-46c9-8781-bc9184da78e4',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Ftrup-elon-meme.png?alt=media&token=0ca88d27-e1cc-4a91-ac87-6907fdc7986b',
      name: 'Image 1',
    },

    // Add more images as needed
  ];

  ngOnInit() {
    this.photopeaURL = this.sanitizeUrl(this.constructPotopeaURL());
  }

  scrollToSection(id: string) {
    const el: HTMLElement | null = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to ' + el.getAttribute('name'));
    }
  }

  constructPotopeaURL() {
    const config = {
      files: [
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fst1kman.psd?alt=media&token=b0e43736-3bf1-4607-a931-48aa26277f4d',
      ],
    };

    // Encode JSON to a URL-safe string
    const encodedConfig = encodeURIComponent(JSON.stringify(config));

    // Construct the full URL
    const photopeaUrl = `https://www.photopea.com#${encodedConfig}`;

    return photopeaUrl;
  }
}

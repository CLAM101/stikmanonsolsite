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
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fother%2FStikman_hat_blunt.png?alt=media&token=2c027eb6-b25d-4013-9639-8320d6b2b881',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kman%20Gangsta%20Cut.glb?alt=media&token=e2039459-c9b5-44a3-99d9-7c63cd23840f',
    },
    {
      name: 'St1kman Mesh glb',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fother%2FSt1kman%20mesh%20Final.png?alt=media&token=90b6da8c-8115-4cc8-8a83-1aceb3f58529',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kman%20mesh%20Final.glb?alt=media&token=9fee6cd6-64c4-42d1-a7d0-8dee9f181c8e',
    },
    {
      name: 'St1kman psd',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fhey%20jump.png?alt=media&token=06a25e60-ba90-4048-9271-bb0048719dca',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FSt1kman-final.psd?alt=media&token=1f4ac022-26e1-4a47-8dc5-489590d9b609',
    },
    {
      name: 'St1kman fbx',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kman%20fbx%20Final.fbx?alt=media&token=dc8ea0e1-2c5a-4b76-9688-c94bb7e183ff',
    },

    {
      name: 'St1kman Gangsta fbx',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/St1kmangangsta%20fbx%20Cut.fbx?alt=media&token=3ebd8da7-8438-475a-bc4a-ffb6930599f9',
    },
    {
      name: 'St1kman VO',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Faudio%2Fst1kman%20intro%20voiceover%20(1).mp3?alt=media&token=497d8674-dfe8-42fc-bdf7-2b49796b5d1c',
    },
    {
      name: 'St1kman Digital Age Song',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Faudio%2Faa%20full%20Caveman%20to%20Digital%20Age.MP3?alt=media&token=b13cae30-cf73-46e0-8dce-ba3fe99511a3',
    },
    {
      name: 'St1kman Country Song',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Faudio%2Fcowboy.mp3?alt=media&token=fd0fc8e4-5ba0-4a0a-b174-a03e35933f8c',
    },
    {
      name: 'St1kman Anime Song',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Faudio%2Fanime.mp3?alt=media&token=bf81c0cc-52e3-4257-8d3e-fc47b8179319',
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
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fdrawing%20pad%20anime.png?alt=media&token=5a1fc072-53c7-476d-bb3c-dc9fa3e964e5',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fst1kman%20at%20trump%20biden.jpg?alt=media&token=157dd5f2-c987-4f22-a8a9-923396b25c92',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fst1kman-cereal-meme.png?alt=media&token=ab2aa02a-abc4-4c61-81cb-3bf2d241d025',
      name: 'Image 1',
    },
  ];

  ngOnInit() {
    this.photopeaURL = this.sanitizeUrl(this.constructPotopeaURL());
  }

  scrollToSection(id: string) {
    const el: HTMLElement | null = document.getElementById(id);

    if (el) {
      const yOffset = -20; // adjust as needed
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  constructPotopeaURL() {
    const config = {
      files: [
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FSt1kman-final.psd?alt=media&token=1f4ac022-26e1-4a47-8dc5-489590d9b609',
      ],
    };

    // Encode JSON to a URL-safe string
    const encodedConfig = encodeURIComponent(JSON.stringify(config));

    // Construct the full URL
    const photopeaUrl = `https://www.photopea.com#${encodedConfig}`;

    return photopeaUrl;
  }
}

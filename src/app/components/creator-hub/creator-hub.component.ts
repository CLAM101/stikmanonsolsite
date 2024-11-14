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
  isPlayingVideo: boolean = false;

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
      name: 'St1kman vrm',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2FVRM-downlaod-logo.webp?alt=media&token=6610526c-22be-42ab-ae91-5953daab6745',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FStikman.vrm?alt=media&token=2fd9aa12-9abf-4e5a-8d64-a56042d69fec',
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
    {
      name: 'St1kman Drill Song',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Faudio%2FSt1kman%20Drill.mp3?alt=media&token=b3331e10-bb72-46db-b4ee-0383db09e52a',
    },
    {
      name: 'St1kman Trap Song',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Faudio%2FStikman%20Trap.mp3?alt=media&token=588706d9-ea73-4394-bd96-4e9dc30098e4',
    },
    {
      name: 'St1kman Trap v2 Song',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Faudio%2FStikman%20Trap%202.mp3?alt=media&token=21c56791-2ef8-40b0-9bba-cb61a7774cdc',
    },
  ];

  memeImages = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fdegen-gasses-purple.webp?alt=media&token=24c2fcd9-e342-47f3-88fe-91db7c4ad8bb',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fdegen-glasses-orange.webp?alt=media&token=3032cfac-cf3e-4a5a-ba6f-a32d10643518',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fdrawing%20pad%20anime%20(1).webp?alt=media&token=d03cf98d-c81b-47f0-be14-d164480d5357',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fdrawing%20pad%20anime.webp?alt=media&token=1474b255-2e0c-472f-a916-2536d30f7366',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Ffuck-bear-meme.webp?alt=media&token=41635db8-53d6-442c-8b5f-9e5021adfe82',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fgroup-photo-meme.webp?alt=media&token=90254cd2-ff3f-4001-a294-087def8e94ea',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fmeme2.webp?alt=media&token=dc296078-0ca8-4504-8c86-3d9f28acb442',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fst1kman%20at%20trump%20biden.webp?alt=media&token=2a87b823-9f31-4228-b8e7-f04629a8b912',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fst1kman-cereal-meme.webp?alt=media&token=a74ae7f6-3216-4c63-bc96-545fbf9a5b83',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fstrip-club-meme.webp?alt=media&token=aab585e5-93eb-4b81-a5fe-418f53d6f270',
      name: 'Image 1',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Ftrup-elon-meme.webp?alt=media&token=2176e139-4330-44c0-ba37-74e13b70ab29',
      name: 'Image 1',
    },
  ];

  backGroundImages = [
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fheadshot%202.png?alt=media&token=e654a772-5286-4b90-9cd4-ece4d5dc2f5f',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fnofty%20game%20play.png?alt=media&token=6868b65c-a5fe-4403-a28b-919d7338f9cb',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fold%20school%20stickman.jpg?alt=media&token=3547f3d6-7c5b-4ee4-9939-550cac62f4e3',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fskinny%20stickman.jpg?alt=media&token=172f45bf-8b1f-4f23-a2d0-fa7c040838e6',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fimage-oprea.webp?alt=media&token=f95f4ea4-a9a5-4df0-b27b-01d683237f46',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fimage.webp?alt=media&token=ca4972c0-a022-4191-ad5d-c70af66a7f72',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2FStikman_hat_blunt.png?alt=media&token=ec8a7064-5f93-423e-8db2-4ba870ecfb73',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fimage2.png?alt=media&token=40a3b360-c553-41e3-86e5-d5f5ccef91c5',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2FUntitled_image_15.png?alt=media&token=ff5fe5dd-ce38-402d-9676-17481dd2705d',
    'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fcreator-hub-background%2Fimage.png?alt=media&token=42565eb4-d09f-4f5b-beff-a455661f63d4',
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

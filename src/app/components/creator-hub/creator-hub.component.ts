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
      type: 'download',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fother%2FStikman_hat_blunt.png?alt=media&token=2c027eb6-b25d-4013-9639-8320d6b2b881',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FSt1kman%20Gangsta%20Cut.glb?alt=media&token=2d86530c-4786-49d9-ae6a-9bb69ac8c344',
    },
    {
      name: 'St1kman Mesh glb',
      type: 'download',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fother%2FSt1kman%20mesh%20Final.png?alt=media&token=90b6da8c-8115-4cc8-8a83-1aceb3f58529',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FSt1kman%20mesh%20Final.glb?alt=media&token=31746853-64d9-46bf-adc8-f8b5ee08d0a3',
    },
    {
      name: 'St1kman psd',
      type: 'download',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Fst1kman-variations%2Fhey%20jump.png?alt=media&token=06a25e60-ba90-4048-9271-bb0048719dca',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FSt1kman-final.psd?alt=media&token=1f4ac022-26e1-4a47-8dc5-489590d9b609',
    },
    {
      name: 'St1kman vrm',
      type: 'download',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2FVRM-downlaod-logo.webp?alt=media&token=6610526c-22be-42ab-ae91-5953daab6745',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FStikman.vrm?alt=media&token=2fd9aa12-9abf-4e5a-8d64-a56042d69fec',
    },
    {
      name: 'St1kman fbx',
      type: 'download',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FSt1kman%20fbx%20Final.fbx?alt=media&token=2263b11f-ed95-4f46-9c6e-2d93d704bcf7',
    },

    {
      name: 'St1kman Gangsta fbx',
      type: 'download',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/images%2Flogos%2Fdownload-audio-logo.webp?alt=media&token=36e4a6a5-fbfd-448d-9de5-f97ac00f4d13',
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2FSt1kmangangsta%20fbx%20Cut.fbx?alt=media&token=13dfd6a0-e72c-4283-ac33-100b5264ec07',
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
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2FStickman_3.mp4?alt=media&token=bb765d5b-a68f-436d-8633-05528a644b5e',
      name: 'cashMoney',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fcash-money.webp?alt=media&token=e8e442fd-ed44-442d-81c5-4c4d10e28220',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2FStickman_4.mp4?alt=media&token=b4a8fc1b-8367-4284-83e5-fc6d54c444c8',
      name: 'cavemen',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fcavemen.webp?alt=media&token=5bb217ee-1965-4398-84b4-3b4a150ccec8',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2FStickman_6.mp4?alt=media&token=f5e328b1-571e-41c2-b5d7-b4152d1541eb',
      name: 'heart',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fheart-stikman.webp?alt=media&token=6c1cba12-8f2b-444e-b401-c786f7433f30',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2FStickman_5.mp4?alt=media&token=973d905b-fd4d-4c16-ab17-63675af1dcb6',
      name: 'pump',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2Fpump.webp?alt=media&token=518fb988-e04f-4bb2-a42b-25bde1bf1ae5',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2FGM.png?alt=media&token=6eb757b6-a976-4496-91ff-9291f2f1b0ca',
      name: 'GM',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2FGM.webp?alt=media&token=60768280-caf3-4249-b3d6-302f5886ca49',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2FGN.png?alt=media&token=921fc4ec-85d5-49df-88a3-824cd8baae33',
      name: 'GN',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2FGN.webp?alt=media&token=cc5e9b4f-1b97-4338-b421-eb6ddee112aa',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2FLFG.png?alt=media&token=8408ed8c-5e03-400b-9ec7-12f48d51a196',
      name: 'LFG',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/Download%20Assets%2Fmemes%2Fscaled%2FLFG.webp?alt=media&token=db6342b4-a7c1-4dc7-bf3e-1cf59f5c0704',
    },
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

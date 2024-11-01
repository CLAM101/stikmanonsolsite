import { Component } from '@angular/core';
import { ImageGridComponent } from '../image-grid/image-grid.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creator-hub',
  standalone: true,
  imports: [ImageGridComponent, CommonModule],
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
        'https://firebasestorage.googleapis.com/v0/b/st1kmanonsol.appspot.com/o/SM01%20(1).psd?alt=media&token=edc8e6ac-9494-4831-be10-a8ff35ddb6d6',
      ],
    };

    // Encode JSON to a URL-safe string
    const encodedConfig = encodeURIComponent(JSON.stringify(config));

    // Construct the full URL
    const photopeaUrl = `https://www.photopea.com#${encodedConfig}`;

    return photopeaUrl;
  }
}

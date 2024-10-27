import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor, *ngIf directives
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer

@Component({
  selector: 'app-image-grid',
  standalone: true, // This makes the component standalone
  imports: [CommonModule], // Import CommonModule to use Angular directives
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'], // Optional: You can use a CSS file for custom styles or inline styles
})
export class ImageGridComponent {
  // Array of images with their respective URLs and file names
  images = [
    {
      url: '../../../assets/images/memes/degen-gasses-purple.png',
      name: 'Image 1',
    },
    {
      url: '../../../assets/images/memes/degen-glasses-orange.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/fuck-bear-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/group-photo-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/jelous-gf-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/strip-club-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/trup-elon-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/caveman-fucking-meme.png',
      name: 'Image 1',
    },
    {
      url: '../../../assets/images/memes/degen-gasses-purple.png',
      name: 'Image 1',
    },
    {
      url: '../../../assets/images/memes/degen-glasses-orange.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/fuck-bear-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/group-photo-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/jelous-gf-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/strip-club-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/trup-elon-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/caveman-fucking-meme.png',
      name: 'Image 1',
    },
    {
      url: '../../../assets/images/memes/degen-gasses-purple.png',
      name: 'Image 1',
    },
    {
      url: '../../../assets/images/memes/degen-glasses-orange.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/fuck-bear-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/group-photo-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/jelous-gf-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/strip-club-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/trup-elon-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/caveman-fucking-meme.png',
      name: 'Image 1',
    },
    {
      url: '../../../assets/images/memes/degen-gasses-purple.png',
      name: 'Image 1',
    },
    {
      url: '../../../assets/images/memes/degen-glasses-orange.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/fuck-bear-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/group-photo-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/jelous-gf-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/strip-club-meme.png',
      name: 'Image 1',
    },
    { url: '../../../assets/images/memes/trup-elon-meme.png', name: 'Image 1' },
    {
      url: '../../../assets/images/memes/caveman-fucking-meme.png',
      name: 'Image 1',
    },

    // Add more images as needed
  ];
  constructor(private sanitizer: DomSanitizer) {} //

  photopeaURL!: SafeResourceUrl;
  showMemeEditor = false;

  ngOnInit() {
    this.photopeaURL = this.sanitizeUrl(this.constructPotopeaURL());
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

  openStikEditor() {
    this.showMemeEditor = true;
  }

  openMemeGrid() {
    this.showMemeEditor = false;
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Method to download an image
  downloadImage(url: string, name: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor, *ngIf directives
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer
interface Image {
  name: string;
  url: string;
  imgSrc?: string;
  type?: string;
}
@Component({
  selector: 'app-image-grid',
  standalone: true, // This makes the component standalone
  imports: [CommonModule], // Import CommonModule to use Angular directives
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'], // Optional: You can use a CSS file for custom styles or inline styles
})
export class ImageGridComponent {
  images!: Image[];
  showNamesIn!: boolean;

  @Input() set imagesInput(value: Image[]) {
    this.images = value;
  }

  @Input() set showNames(value: boolean) {
    this.showNamesIn = value;
  }

  @Input() set inoutOverFlowYScroll(value: boolean) {
    this.overFlowYScroll = value;
  }

  overFlowYScroll: boolean = true;

  // Array of images with their respective URLs and file names

  constructor(private sanitizer: DomSanitizer) {} //

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  downloadFile() {}

  // Method to download an image
  downloadImage(url: string, name: string, type?: string) {
    const link = document.createElement('a');
    link.href = url;
    if (type === 'download') {
      link.click();
      return;
    }

    link.target = '_blank';

    link.download = name;
    link.click();
  }
}

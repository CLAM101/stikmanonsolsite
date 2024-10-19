import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor, *ngIf directives

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

    // Add more images as needed
  ];

  // Method to download an image
  downloadImage(url: string, name: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
  }
}

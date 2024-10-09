import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChildren,
  ViewChild,
  QueryList,
} from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private router: Router) {}

  isInView: boolean = false;
  @ViewChild('myElement') myElement!: ElementRef;

  // @HostListener('window:scroll', ['$event'])
  scrollToSection(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
    console.log('Scrolling to ' + el.getAttribute('name'));
  }

  ngAfterViewInit() {
    // Trigger the transition after the view has been initialized
    setTimeout(() => {
      this.isInView = true;
    }, 300); // Optional delay to ensure smooth rendering
  }
}

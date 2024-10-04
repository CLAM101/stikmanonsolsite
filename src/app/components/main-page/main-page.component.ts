import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private router: Router) {}

  scrollToSection(el: HTMLElement) {
    el.scrollIntoView();
    console.log('Scrolling to ' + el.getAttribute('name'));
  }
}

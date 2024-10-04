import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter, withInMemoryScrolling } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: MainPageComponent },
  { path: 'how-to-buy', component: MainPageComponent },
  { path: 'tokenomics', component: MainPageComponent },
  { path: 'roadmap', component: MainPageComponent },
];

// Bootstrap application with scrolling features enabled
bootstrapApplication(MainPageComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Restore scroll position on navigation
        anchorScrolling: 'enabled', // Scroll to the anchor element when a fragment is present
        // Optional: Adjust scroll offset for fixed headers
      })
    ),
  ],
});

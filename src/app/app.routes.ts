import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page.component';
import { WaphPage } from './waph-page/waph-page.component';
import { AboutPage } from './about-page/about-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    data: {
      icon: 'home'
    },
    component: HomePage
  },
  {
    path: 'waph-ginnms',
    title: 'WAPH',
    component: WaphPage,
  },
  {
    path: 'about',
    title: 'About Me',
    component: AboutPage
  }
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePage } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomePage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ginnms.github.io';
}

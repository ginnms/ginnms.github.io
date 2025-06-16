import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {

}

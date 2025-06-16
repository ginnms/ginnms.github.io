import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppShellComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Milo Ginn';
}

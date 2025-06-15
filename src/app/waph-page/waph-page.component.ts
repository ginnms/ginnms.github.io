import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-waph-page',
  imports: [ NavbarComponent, MatButtonModule, ClockComponent ],
  templateUrl: './waph-page.component.html',
  styleUrl: './waph-page.component.scss'
})

export class WaphPage {
  showEmail: boolean = false;
  currentTime: string = "" + new Date();

  ngOnInit() {
    function getTime(time: string) {
      time = "Current time: " + new Date();
    }
    setInterval(getTime, 500);
  }
}

import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  imports: [ NavbarComponent, MatButtonModule ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})


export class HomePage {
  showEmail: boolean = false;
  currentTime: string = "" + new Date();

  ngOnInit() {
    function getTime(time: string) {
      time = "Current time: " + new Date();
    }
    setInterval(getTime, 500);
  }
}

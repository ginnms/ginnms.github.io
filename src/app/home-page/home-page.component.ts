import { Component, ViewChild, ElementRef, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ClockComponent } from '../clock/clock.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  imports: [ MatButtonModule, ClockComponent ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

@Injectable({providedIn: 'root'})
export class HomePage {
  showEmail: boolean = false;
  @ViewChild('joke') joke!: ElementRef;
  private http = inject(HttpClient);
  
  ngOnInit() {
    let joke = this.joke.nativeElement;
    
    this.http.get<string>("https://v2.jokeapi.dev/joke/Any").subscribe(result => {
      joke = result;
    });
  }
}

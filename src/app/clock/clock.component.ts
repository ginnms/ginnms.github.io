import { Component, Inject, ViewChild, ElementRef, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  imports: [ CommonModule ],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements AfterViewInit {
  @ViewChild('analogClock') analogClock!: ElementRef;
  @ViewChild('digitalClock') digitalClock!: ElementRef;

  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    //Digital clock logic
    if(this.digitalClock != null) {
      let digitalClock = this.digitalClock.nativeElement;
      function displayTime() {
        digitalClock.innerHTML = "Current time: " + new Date();
      }
      setInterval(displayTime, 500);
    }

    // Analog Clock logic
    //
    // something in here makes reloads very long, may be an issue in the future
    // ideally this needs a full redesign
    if(this.analogClock != null) {
      const canvas = this.analogClock.nativeElement;
      const ctx = canvas.getContext("2d");
      let radius = canvas.height / 2;

      if(ctx !== null) {
        ctx.translate(radius, radius);
        radius = radius * 0.90;
        setInterval(drawClock, 1000);

        function drawClock() {
          if(ctx !== null) {
            drawFace(ctx, radius);
            drawNumbers(ctx, radius);
            drawTime(ctx, radius);
          }
        }
      }
    }

    // Code from: https://waph-phung.github.io/clock.js
    // Added TypeScript to parameters
    function drawFace(ctx: CanvasRenderingContext2D, radius: number) {
      const grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
      grad.addColorStop(0, '#333');
      grad.addColorStop(0.5, 'white');
      grad.addColorStop(1, '#333');
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2*Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius*0.1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
      ctx.fillStyle = '#333';
      ctx.fill();
    }
    function drawNumbers(ctx: CanvasRenderingContext2D, radius: number) {
      ctx.font = radius*0.15 + "px arial";
      ctx.textBaseline="middle";
      ctx.textAlign="center";
      for(let num = 1; num < 13; num++){
        let ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
      }
    }
    function drawTime(ctx: CanvasRenderingContext2D, radius: number){
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      //hour
      hour=hour%12;
      hour=(hour*Math.PI/6)+
      (minute*Math.PI/(6*60))+
      (second*Math.PI/(360*60));
      drawHand(ctx, hour, radius*0.5, radius*0.07);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      drawHand(ctx, minute, radius*0.8, radius*0.07);
      // second
      second=(second*Math.PI/30);
      drawHand(ctx, second, radius*0.9, radius*0.02);
    }
    function drawHand(ctx: CanvasRenderingContext2D, pos: number, length: number, width: number) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    }

    // END https://waph-phung.github.io/clock.js
  }
}

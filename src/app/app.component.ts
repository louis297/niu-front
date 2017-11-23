import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
  public constructor(private titleService: Title ) { this.titleService.setTitle("OI Camp");}
}
import { BrowserDetectService } from './core/services/browser-detect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maiki';

  isMobile: boolean = false;
  isDesktop: boolean = false;

  constructor(public browserDetect: BrowserDetectService) {}

  ngOnInit() {
    this.isMobile = this.browserDetect.isMobile();
    this.isDesktop = this.browserDetect.isDesktop();
  }
}

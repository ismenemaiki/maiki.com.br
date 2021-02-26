import { BrowserDetectService } from './../core/services/browser-detect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {
  isDesktop = false;
  isMobile = false;

  constructor(private browserDetect: BrowserDetectService) { }

  ngOnInit() {
    this.isDesktop = this.browserDetect.isDesktop();
    this.isMobile = this.browserDetect.isMobile();
    window.onscroll = () => { this.browserDetect.scrollFunction(1010); };
  }

}

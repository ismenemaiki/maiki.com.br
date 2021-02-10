import { BrowserDetectService } from './../core/services/browser-detect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isMobile = false;
  isDesktop = false;

  constructor(private browserDetect: BrowserDetectService) {}

  ngOnInit() {
    this.isMobile = this.browserDetect.isMobile();
    this.isDesktop = this.browserDetect.isDesktop();
  }

  openMenu() {
    document.getElementById('mySidepanel').style.width = '70%';
    document.getElementById('mySidepanel').style.height = '100%';
    setTimeout(() => {
      document.addEventListener('click', this.handleClickOutside, true);
    }, 100);
  }

  closeMenu() {
    document.getElementById('mySidepanel').style.width = '0';
  }

  handleClickOutside() {
    document.getElementById('mySidepanel').style.width = '0';
    document.removeEventListener('click', this.handleClickOutside, false);
  }
}

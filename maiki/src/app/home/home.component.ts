import { BrowserDetectService } from './../core/services/browser-detect.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isMobile: boolean = false;
  isDesktop: boolean = false;

  constructor(private browserDetect: BrowserDetectService) {}

  ngOnInit() {
    this.isMobile = this.browserDetect.isMobile();
    this.isDesktop = this.browserDetect.isDesktop();
  }

  ngAfterViewInit() {
    const textoConsole = document.querySelector('.console-pc');
    this.typeWrite(textoConsole);
  }
  typeWrite(elemento: any) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach((letra: string, i: number) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
}

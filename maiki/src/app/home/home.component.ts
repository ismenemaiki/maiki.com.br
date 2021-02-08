import { BrowserDetectService } from './../core/services/browser-detect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isMobile: boolean;

  constructor(private browserDetect: BrowserDetectService) {}

  ngOnInit() {
    this.isMobile = this.browserDetect.isMobile();
    const titulo = document.querySelector('.console-pc');
    this.typeWrite(titulo);
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

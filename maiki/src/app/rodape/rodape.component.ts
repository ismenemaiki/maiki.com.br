import { BrowserDetectService } from './../core/services/browser-detect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  isDesktop = false;
  isMobile = false;

  rootImagens = '../../assets/img/redes-sociais/';
  arrayRedes = [
    { nome: 'facebook', link: 'https://www.facebook.com/maiki.rdgs' },
    { nome: 'instagram', link: 'https://www.instagram.com/maiki_rdgs/' },
    { nome: 'linkedin', link: 'https://www.linkedin.com/in/maiki-ismene-495737110/' },
    { nome: 'pinterest', link: '' },
  ];
  arrayContatos = [
    { nome: 'whatsapp', link: 'https://wa.me/5511948082374' },
    { nome: 'email', link: 'mailto:ismenemaiki@gmail.com' },
  ];
  arrayMobile = [
    { nome: 'whatsapp', link: 'https://wa.me/5511948082374' },
    { nome: 'email', link: 'mailto:ismenemaiki@gmail.com' },
    { nome: 'facebook', link: 'https://www.facebook.com/maiki.rdgs' },
    { nome: 'linkedin', link: 'https://www.linkedin.com/in/maiki-ismene-495737110/' },
    { nome: 'instagram', link: 'https://www.instagram.com/maiki_rdgs/' },
  ];
  constructor(private browser: BrowserDetectService) { }

  ngOnInit() {
    this.isDesktop = this.browser.isDesktop();
    this.isMobile = this.browser.isMobile();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  rootImagens = '../../assets/img/redes-sociais/';
  arrayRedes = [
    { nome: 'facebook', link: 'https://www.facebook.com/maiki.rdgs' },
    { nome: 'instagram', link: 'https://www.instagram.com/maiki_rdgs/' },
    { nome: 'whatsapp', link: 'https://wa.me/5511948082374' },
    { nome: 'linkedin', link: 'https://www.linkedin.com/in/maiki-ismene-495737110/' },
    { nome: 'pinterest', link: '' },
    { nome: 'skype', link: '' },
    { nome: 'email', link: 'mailto:ismenemaiki@gmail.com' },
    { nome: 'github', link: 'https://github.com/ismenemaiki' }
  ];
  constructor() { }

  ngOnInit() {
  }

}

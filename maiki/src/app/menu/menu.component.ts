import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() {}
  listaMenu = ['inicio', 'sobre', 'portfolios', 'curriculo', 'blog'];
  ngOnInit() {
    // const inicio = document.getElementById('inicio');
    // inicio.className += ' active';
  }

  menuResponsivo() {
    const menuNav = document.getElementById('menu-nav');
    if (menuNav.className === 'menu-nav') {
      menuNav.className += ' responsive';
    } else {
      menuNav.className = 'menu-nav';
    }
  }
  ativar(menu: string) {
    this.menuResponsivo();
    this.listaMenu.forEach((it: string) => {
      const item = document.querySelector(`#${it}`);
      if (item.className.includes('active')) {
        item.className = '';
      }
    });
    const menuClicado = document.querySelector(`#${menu}`);
    menuClicado.className += ' active';
  }
}

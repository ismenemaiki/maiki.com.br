import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
})
export class PortfoliosComponent implements OnInit, AfterViewInit {
  tattoos: any;
  desenhos: any;
  slideIndex = 1;
  arrayTattoos: any;
  arrayDesenhos: any;
  rootTattos = '../../assets/img/tattoos/';
  // rootDesenhos = '../../assets/img/desenhos/';
  imagemSelecionada: string;

  constructor() {}

  ngOnInit() {
    this.arrayTattoos = [
      { id: 1, nome: 'livrai-me-do-mal' },
      { id: 2, nome: 'gengar' },
      { id: 3, nome: 'triangulo-bolinha' },
      { id: 4, nome: 'bem-me-quero' },
      { id: 5, nome: 'chora-agora' },
      { id: 6, nome: 'decidi' },
      { id: 7, nome: 'filhos-amor-eterno' },
      { id: 8, nome: 'hakuna-matata' },
      { id: 9, nome: 'irmaos-metralha' },
      { id: 10, nome: 'jamais-perca-seu-equilibrio' },
      { id: 11, nome: 'la-casa-de-papel' },
      { id: 12, nome: 'palhaço' },
      { id: 13, nome: 'passarinho-rosa' },
    ];
    this.arrayDesenhos = [
      { id: 1, nome: 'img' }
    ];
    const abaTattoo = document.getElementById('btn-tattoo');
    abaTattoo.click();
  }
  ngAfterViewInit() {
    this.exibirImagem(this.slideIndex);

  }
  abrirModal(id: string, imagem: string) {
    this.imagemSelecionada = imagem;
    document.getElementById(id).style.display = 'block';
  }
  fecharModal(id: string) {
    document.getElementById(id).style.display = 'none';
  }
  trocaImagem(n: number) {
    this.exibirImagem((this.slideIndex += n));
  }
  exibirImagem(n: number) {
    let i: number;
    const slide: any = document.getElementsByClassName('slides');
    const selecionado: any = document.getElementsByClassName('selecionado');

    if (n > slide.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slide.length; }
    for (i = 0; i < slide.length; i++) {  slide[i].style.display = 'none'; }
    for (i = 0; i < selecionado.length; i++) {
      selecionado[i].className = selecionado[i].className.replace(' atual', '');
    }
    slide[this.slideIndex - 1].style.display = 'block';
    selecionado[this.slideIndex - 1].className += ' atual';
  }
  imagemAtual(n: number) {
    this.exibirImagem((this.slideIndex = n));
  }
  trocaAba(evt: MouseEvent, aba: string) {
    let i: number;
    let conteudoAba: any;
    let linkAba: any;
    conteudoAba = document.getElementsByClassName('conteudoAba');
    for (i = 0; i < conteudoAba.length; i++) {
      conteudoAba[i].style.display = 'none';
    }
    linkAba = document.getElementsByClassName('linkAba');
    for (i = 0; i < linkAba.length; i++) {
      linkAba[i].className = linkAba[i].className.replace(' active', '');
    }
    document.getElementById(aba).style.display = 'block';
    (evt.currentTarget as any).className += ' active';
  }
}

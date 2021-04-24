import { BrowserDetectService } from './../core/services/browser-detect.service';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFlip,
  HashNavigation,
  Autoplay
} from 'swiper/core';
import { Router } from '@angular/router';

SwiperCore.use([Navigation, Pagination, EffectFlip, HashNavigation, Autoplay]);
@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
})
export class PortfoliosComponent implements OnInit {
  aba: string = 'tatuagens';
  isMobile: boolean = false;
  isDesktop: boolean = false;
  tattoo: boolean = false;
  desenho: boolean = false;
  programacao: boolean = false;

  constructor(private browserDetect: BrowserDetectService, private router: Router) { }

  ngOnInit() {
    this.tattoo = true;
    this.isDesktop = this.browserDetect.isDesktop();
    this.isMobile = this.browserDetect.isMobile();
    // window.onscroll = () => { this.browserDetect.scrollFunction(50); };

    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
        effect: 'flip',
        grabCursor: true,
        hashNavigation: { watchState: true },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: true,
        // },
      });
    }, 100);
  }
  reset() {
    this.ngOnInit();
    this.router.navigate(['/portfolios']);
    this.desenho = false;
    this.tattoo = false;
    this.programacao = false;
  }
  changeAba(aba: string): void {
    switch (aba) {
      case 'programacao':
        this.reset();
        this.programacao = true;
        break;
      case 'desenhos':
        this.reset();
        this.desenho = true;
        break;
      default:
        this.reset();
        this.tattoo = true;
        break;
    }
  }
}

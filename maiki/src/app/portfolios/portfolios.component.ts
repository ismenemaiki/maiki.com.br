import { BrowserDetectService } from './../core/services/browser-detect.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFlip,
  HashNavigation,
  Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFlip, HashNavigation, Autoplay ]);
@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
})
export class PortfoliosComponent implements OnInit, OnChanges {
  isMobile = false;
  isDesktop = false;

  tattoos: boolean = true;
  desenhos: any;

  constructor(private browserDetect: BrowserDetectService) {}

  ngOnChanges() {

  }
  ngOnInit() {
    this.isDesktop = this.browserDetect.isDesktop();
    this.isMobile = this.browserDetect.isMobile();
    window.onscroll = () => { this.browserDetect.scrollFunction(50); };

    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
        effect: 'flip',
        grabCursor: true,
        hashNavigation: { watchState: true },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  }, 100);

  }

  // onSwiper(swiper) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
  changeAba(aba: string): void {
    if (aba === 'desenhos') {
      this.tattoos = false;
      this.desenhos = true;
      this.ngOnInit();
    }
    if (aba === 'tattoos') {
      this.tattoos = true;
      this.desenhos = false;
      this.ngOnInit();
    }
  }
}

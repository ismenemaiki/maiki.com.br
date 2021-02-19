import { SwiperModule } from 'swiper/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { routing } from './app.routing';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { BlogComponent } from './blog/blog.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SobreComponent,
    PortfoliosComponent,
    CurriculoComponent,
    BlogComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

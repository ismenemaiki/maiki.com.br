import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { routing } from './app.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SobreComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BlogComponent } from './blog/blog.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'portfolios', component: PortfoliosComponent},
  { path: 'curriculo', component: CurriculoComponent},
  { path: 'blog', component: BlogComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SpectrumPagesComponent } from './spectrum-pages/spectrum-pages.component';

const routes: Routes = [
  { path: '404', component: NotFoundPageComponent},
  { path: ':country/:region', component: SpectrumPagesComponent},
  { path: ':country', component: SpectrumPagesComponent},
  { path: '', component: HomePageComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

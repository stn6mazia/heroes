import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './components';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent, PageNotFoundComponent } from './pages';

const appRoutes: Routes = [
  {
    path: 'heroes-list',
    component: HeroesListComponent,
  },
  {
    path: 'hero-detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'home',
    redirectTo: 'heroes-list',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  declarations: [
    HeroesComponent,
    PageNotFoundComponent,
    HeroesListComponent,
    HeroDetailComponent
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }

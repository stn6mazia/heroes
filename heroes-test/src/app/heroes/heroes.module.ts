import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent, HeaderComponent } from './components';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent, PageNotFoundComponent, ComicsComponent } from './pages';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';

const appRoutes: Routes = [
  {
    path: 'heroes-list',
    component: HeroesListComponent,
  },
  {
    path: 'comics-list',
    component: ComicsComponent
  },
  {
    path: 'hero-detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'comic-detail/:id',
    component: ComicDetailComponent
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
    HeroDetailComponent,
    ComicsComponent,
    HeaderComponent,
    ComicDetailComponent
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }

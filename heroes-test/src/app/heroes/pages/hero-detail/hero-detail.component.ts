import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../hero';
import { HeroesService } from '../../services';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  current = '';
  justId = '';
  heroes: Hero[];


  constructor(
    private heroService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.current = this.router.url;
    this.justId = this.current.substring(13);

    this.getHero();
  }

  getList() {
    this.heroService.list()
      .subscribe(hero => this.heroes = hero.data.results.id)
  }

  getHero() {
    let id = parseInt(this.justId);
    this.heroService.getById(id)
      .subscribe(hero => this.heroes = hero.data.results)
  }

}

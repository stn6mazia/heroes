import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services';
import { Hero } from '../../mocules';

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

  getHero() {
    let id = parseInt(this.justId);
    this.heroService.getById(id)
      .subscribe(hero => this.heroes = hero.data.results)
  }

}

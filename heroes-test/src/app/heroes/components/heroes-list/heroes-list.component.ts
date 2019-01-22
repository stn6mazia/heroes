import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services';
import { Hero } from '../../mocules';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  getInput: string;
  reusableHero;
  heroes: Hero[];
  parsedHeroes: any;
  heroImage: Hero[];

  constructor(
    private heroService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.heroService.list()
      .subscribe(hero => this.heroes = hero.data.results);
  }
}

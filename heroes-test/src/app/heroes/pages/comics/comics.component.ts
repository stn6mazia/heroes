import { Component, OnInit } from '@angular/core';
import { Comic } from '../../mocules';
import { Router } from '@angular/router';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: Comic[];

  constructor(
    private comicService: ComicsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getComicsList();
  }

  getComicsList() {
    this.comicService.listComics()
      .subscribe(comic => this.comics = comic.data.results)
  }

}

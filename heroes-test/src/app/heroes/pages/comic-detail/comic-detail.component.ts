import { Component, OnInit } from '@angular/core';
import { Comic } from '../../mocules';
import { ComicsService } from '../../services/comics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  current = '';
  justId = '';
  comics: Comic[];

  constructor(
    private comicService: ComicsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.current = this.router.url;
    this.justId = this.current.substring(14);

    console.log(this.justId)

    this.getComic();
  }

  getComic() {
    let id = parseInt(this.justId);
    this.comicService.getById(id)
      .subscribe(comic => this.comics = comic.data.results)
  }

}

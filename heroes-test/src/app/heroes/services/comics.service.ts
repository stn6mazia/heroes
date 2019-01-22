import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Comic } from '../mocules/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  baseURL = 'https://gateway.marvel.com/v1/public/comics';
  ts = '1';
  apiKey = '320e53eb73d72a66555193e9d981c89f';
  hash = 'c63a4767870f229b5bfbfead4d6e80e4';

  identify = `?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`

  private readonly API = `${this.baseURL}${this.identify}`;

  constructor(private http: HttpClient) { }

  listComics() {
    return this.http.get<Comic[]>(this.API)
      .pipe(
        tap(console.log)
      )
  }

  getById(id: number) {
    let characterUrl = `${this.baseURL}/${id}${this.identify}`;
    return this.http.get(`${characterUrl}`)
      .pipe(
        tap(console.log)
      )
  }
}

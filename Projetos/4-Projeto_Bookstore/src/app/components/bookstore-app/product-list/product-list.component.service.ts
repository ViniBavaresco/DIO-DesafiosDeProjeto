import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Books';

@Injectable()
export class BookService {
  private url = 'https://sheet.best/api/sheets/b7a1d491-2e45-45de-add3-54ac55d4acd1';

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'aplication/json' }),
  };

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.url);
  }
}

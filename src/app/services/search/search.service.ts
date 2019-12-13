import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private url = `https://www.googleapis.com/books/v1/volumes?q=`;
  
  searchBooks(str: string) {
    return this.http.get(`${this.url}intitle:${str.replace(/\s/g, "+")}`).toPromise();
  }

  searchBookByTitle(title: string) {
    return this.http.get(`${this.url}intitle:"${title.replace(/\s/g, "+")}"`).toPromise();
  }
}

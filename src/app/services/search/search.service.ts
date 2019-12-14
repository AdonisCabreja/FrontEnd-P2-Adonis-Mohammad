import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private url = `https://www.googleapis.com/books/v1/volumes?q=`;
  
  searchBooks(str: string) {
    /*
      did a get request and added the string that was inputted
      from the field. Also replaced all spaces with "+" since the
      api states that it is more accurate this way.
    */
    return this.http.get(`${this.url}${str.replace(/\s/g, "+")}&printType=books&filter=paid-ebooks`).toPromise();
  }

  searchBookByTitle(title: string) {
    /*
      also did a get request and added the title name from the book
      the user clicked on.
    */
    return this.http.get(`${this.url}intitle:"${title.replace(/\s/g, "+")}"&printType=books&filter=paid-ebooks`).toPromise();
  }
}

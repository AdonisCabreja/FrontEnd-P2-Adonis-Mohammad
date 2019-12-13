import { Component, OnInit} from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  books = [];

  search(str: string): void {
    this.searchService.searchBooks(str) // calls the method from searchService and passes the string from the input box.
      .then( (response) => {
        this.books = Object.values(response)[2];  // Object.values turns the response into an array. (just to easily access everything)
    })
  }

  ngOnInit(): void {

  }

}

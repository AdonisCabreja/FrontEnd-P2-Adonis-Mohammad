import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  bookTitle: string;
  isDataLoaded: boolean; // Used to not render the component until the data is fetched.
  book = { };

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.bookTitle = p["title"];  // assigns the title value found in the route
      this.searchService.searchBookByTitle(this.bookTitle).then(data => {
        this.book = data["items"][0]; // assigns the book that the promise returned
        this.isDataLoaded = true; // after it fetches it, assign this to true.
        console.log(this.book);
      });
    })
  }

}

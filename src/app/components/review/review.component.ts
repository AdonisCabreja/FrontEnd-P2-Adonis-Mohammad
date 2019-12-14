import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /*
    Instead of having these hard coded reviews we can access the database
    and grab the reviews by the title name.
  */
  reviews = [
    {
      name: "Adonis Cabreja",
      headline: "Awesome Book",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in hic voluptates blanditiis harum quae illo dolores vel. Aspernatur sit deserunt accusantium nobis sequi. Necessitatibus, temporibus nulla! Eligendi, modi odit!",
    },
    {
      name: "Adonis Cabreja",
      headline: "Awesome Book",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in hic voluptates blanditiis harum quae illo dolores vel. Aspernatur sit deserunt accusantium nobis sequi. Necessitatibus, temporibus nulla! Eligendi, modi odit!",
    },
    {
      name: "Adonis Cabreja",
      headline: "Awesome Book",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in hic voluptates blanditiis harum quae illo dolores vel. Aspernatur sit deserunt accusantium nobis sequi. Necessitatibus, temporibus nulla! Eligendi, modi odit!",
    },
    {
      name: "Adonis Cabreja",
      headline: "Awesome Book",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in hic voluptates blanditiis harum quae illo dolores vel. Aspernatur sit deserunt accusantium nobis sequi. Necessitatibus, temporibus nulla! Eligendi, modi odit!",
    },
    {
      name: "Adonis Cabreja",
      headline: "Awesome Book",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae in hic voluptates blanditiis harum quae illo dolores vel. Aspernatur sit deserunt accusantium nobis sequi. Necessitatibus, temporibus nulla! Eligendi, modi odit!",
    }
  ];

}

import { Component } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: 'review',
  inputs: ['currentReview'],
  template: `
  <h3>{{currentReview.author}}</h3>
  <h4>Rating: {{currentReview.rating}}</h4>
  <p>{{currentReview.text}}</p>
  `
})
export class ReviewComponent {
  public currentReview: Review;
}

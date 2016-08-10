import { Component } from 'angular2/core';
import { Review } from './review.model';
import { ReviewComponent } from './review.component';

@Component({
  selector: 'review-list',
  inputs: ['reviewList'],
  directives: [ReviewComponent],
  template: `
  <div *ngFor="#review of reviewList">
    <review [currentReview]='review'></review>
  </div>
  `
})
export class ReviewListComponent {
  public reviewList: Review[];
}

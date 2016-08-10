import { Component } from 'angular2/core';
import { Review } from './review.model';
import { ReviewComponent } from './review.component';
import { RestaurantReviewPipe } from './restaurant-review.pipe';
// import { RestaurantListComponent } from './restaurant-list.component';

@Component({
  selector: 'review-list',
  inputs: ['reviewList', 'reviewListFilter'],
  pipes: [RestaurantReviewPipe],
  directives: [ReviewComponent],
  template: `
  <div *ngFor="#review of reviewList | restaurantReview:reviewListFilter">
    <review [currentReview]='review'></review>
  </div>
  `
})
export class ReviewListComponent {
  public reviewList: Review[];
}

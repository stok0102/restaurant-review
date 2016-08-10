import { Component } from 'angular2/core';
import { Review } from './review.model';
import { ReviewComponent } from './review.component';
import { RestaurantReviewPipe } from './restaurant-review.pipe';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';

// import { RestaurantListComponent } from './restaurant-list.component';

@Component({
  selector: 'review-list',
  inputs: ['reviewList', 'selectedRestaurant'],
  pipes: [RestaurantReviewPipe],
  directives: [ReviewComponent, RestaurantComponent],
  template: `
  <restaurant [currentRestaurant]="selectedRestaurant"></restaurant>
  <h3>Average Rating: {{selectedRestaurant.getAverageRating(reviewList).toFixed(2)}}</h3>
  <div *ngFor="#review of reviewList | restaurantReview:selectedRestaurant.id">
    <review [currentReview]='review'></review>
  </div>
  `
})
export class ReviewListComponent {
  public reviewList: Review[];
}

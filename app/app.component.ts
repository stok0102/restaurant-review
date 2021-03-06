import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { Review } from './review.model';
import { ReviewListComponent } from './review-list.component';
import { NewReviewComponent } from './new-review.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent, NewRestaurantComponent, ReviewListComponent, NewReviewComponent],
  template:`
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <restaurant-list [restaurantList]="restaurants" (onRestaurantSelect)="changeReviewFilter($event)"></restaurant-list>
        <new-restaurant (newRestaurantEvent)="addRestaurant($event)"></new-restaurant>
      </div>
      <div *ngIf="selectedRestaurant" class="col-sm-6">
        <review-list [reviewList]="reviews" [selectedRestaurant]="selectedRestaurant"></review-list>
        <new-review [restaurantId]="selectedRestaurant.id" (newReviewEvent)="addReview($event)"></new-review>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  public reviews: Review[];
  public id: number;
  public selectedRestaurant: Restaurant;
  constructor() {
    this.restaurants = [new Restaurant("Burgerville", "Burgers", "1234 NW Main St.", 1, 0)];
    this.reviews = [new Review("Bob", "I love burgerville with all my heart", 5, 0), new Review("John", "I love burgerville with all my heart", 5, 0), new Review("Jim", "I despise pizza", 1, 1), new Review("Jacques", "I am vegan", 2, 1)];
  }
  addRestaurant(restaurant: Restaurant) {
    restaurant.id = this.restaurants.length;
     this.restaurants.push(restaurant);
  }
  changeReviewFilter(selectedRestaurant: Restaurant) {
    this.selectedRestaurant = selectedRestaurant;
  }
  addReview(review: Review) {
    this.reviews.push(review);
  }
}

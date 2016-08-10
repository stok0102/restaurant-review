import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { Review } from './review.model';
import { ReviewListComponent } from './review-list.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent, NewRestaurantComponent, ReviewListComponent],
  template:`
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h1>Yelp Clone</h1>
        <restaurant-list [restaurantList]="restaurants"></restaurant-list>
        <new-restaurant (newRestaurantEvent)="addRestaurant($event)"></new-restaurant>
      </div>
      <div class="col-sm-6">
        <review-list [reviewList]="reviews"></review-list>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  public reviews: Review[];
  public id: number;
  constructor() {
    this.restaurants = [new Restaurant("Burgerville", "Burgers", "1234 NW Main St.", 1, 0)];
    this.reviews = [new Review("Bob", "I love burgerville with all my heart", 5, 0), new Review("John", "I love burgerville with all my heart", 5, 0)];
    console.log(this.reviews);
  }
  addRestaurant(restaurant: Restaurant) {
    restaurant.id = this.restaurants.length;
     this.restaurants.push(restaurant);
  }
}

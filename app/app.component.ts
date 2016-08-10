import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantListComponent } from './restaurant-list.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template:`
  <h1>Yelp Clone</h1>
  <restaurant-list [restaurantList]="restaurants"></restaurant-list>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  constructor() {
    this.restaurants = [new Restaurant("Burgerville", "Burgers", "1234 NW Main St.", 1)];
  }
}

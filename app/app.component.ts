import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { NewRestaurantComponent } from './new-restaurant.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent, NewRestaurantComponent],
  template:`
  <h1>Yelp Clone</h1>
  <restaurant-list [restaurantList]="restaurants"></restaurant-list>
  <new-restaurant (newRestaurantEvent)="addRestaurant($event)"></new-restaurant>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  constructor() {
    this.restaurants = [new Restaurant("Burgerville", "Burgers", "1234 NW Main St.", 1)];
  }
  addRestaurant(restaurant: Restaurant) {
     this.restaurants.push(restaurant);
  }
}

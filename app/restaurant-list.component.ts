import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent],
  template: `
    <div *ngFor="#restaurant of restaurantList">
      <restaurant [currentRestaurant]="restaurant"></restaurant>
    </div>
  `
})

export class RestaurantListComponent {

}

import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  directives: [RestaurantComponent],
  template: `
    <div *ngFor="#restaurant of restaurantList ">
      <restaurant [currentRestaurant]="restaurant" (click)="restaurantClicked(restaurant)"></restaurant>
    </div>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  public onRestaurantSelect: EventEmitter<Restaurant>;
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    console.log('our click', clickedRestaurant);
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
}

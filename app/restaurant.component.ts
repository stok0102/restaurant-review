import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant',
  inputs: ['currentRestaurant'],
  template: `
    <h1>{{currentRestaurant.name}}</h1>
    <h3>{{currentRestaurant.specialty}}</h3>
    <h3>{{currentRestaurant.address}}</h3>
  `
})

export class RestaurantComponent {
  public currentRestaurant: Restaurant;
}

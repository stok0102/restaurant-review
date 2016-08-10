import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  outputs: ['newRestaurantEvent'],
  template:`
  <div>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Specialty" class="col-sm-8 input-lg" #newSpecialty>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Address" class="col-sm-8 input-lg" #newAddress>
    <button (click)="addRestaurant(newName, newSpecialty, newAddress, newPrice)" class="btn-warning btn-lg add-button">Add</button>
  </div>
  `
})
export class NewRestaurantComponent {
  public newRestaurantEvent: EventEmitter<Restaurant>;
  constructor(){
    this.newRestaurantEvent = new EventEmitter();
  }
  addRestaurant(userName: HTMLInputElement, userSpecialty: HTMLInputElement, userAddress: HTMLInputElement, userPrice: HTMLInputElement) {
    this.newRestaurantEvent.emit(
      new Restaurant(userName.value, userSpecialty.value, userAddress.value, parseInt(userPrice.value))
    );
  }
}

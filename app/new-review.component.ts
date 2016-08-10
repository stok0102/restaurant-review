import { Component, EventEmitter } from 'angular2/core';
import { Review } from './review.model';


@Component({
  selector: 'new-review',
  inputs: ['restaurantId'],
  outputs: ['newReviewEvent'],
  template:`
  <div>
    <input placeholder="Author" class="col-sm-8 input-lg" #newAuthor>
    <input placeholder="Text" class="col-sm-8 input-lg" #newText>
    <input type="number" min="0" max="5"placeholder="Rating(0-5)" class="col-sm-8 input-lg" #newRating>
    <button (click)="addReview(newAuthor, newText, newRating, restaurantId)" class="btn-warning btn-lg add-button">Add</button>
  </div>
  `
})
export class NewReviewComponent{
  public newReviewEvent: EventEmitter<Review>;
  constructor(){
    this.newReviewEvent = new EventEmitter();
  }
  addReview(userAuthor: HTMLInputElement, userText: HTMLInputElement, userRating: HTMLInputElement, restaurantId: number) {
    if (userAuthor.value === "" || userText.value === "" || userRating.value === "") {
      alert("field missing");
    } else {
      this.newReviewEvent.emit(new Review(userAuthor.value, userText.value, parseInt(userRating.value), restaurantId));
      userAuthor.value = "";
      userText.value = "";
      userRating.value = "";
    }
  }
}

import { Pipe, PipeTransform } from "angular2/core";
import { Review } from './review.model';

@Pipe({
  name: "restaurantReview",
  pure: false
})

export class RestaurantReviewPipe implements PipeTransform {
  transform(input: Review[], args) {
    var restaurantId = args[0];
    return input.filter((review) => (review.restaurantId === restaurantId));
  }
}

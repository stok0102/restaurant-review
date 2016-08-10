import { Review } from './review.model';

export class Restaurant {
  constructor(public name: string, public specialty: string, public address: string, public price: number, public id?: number) {}

  getAverageRating(reviews: Review[]): number {
    var total: number = 0;
    var count: number = 0;
    for(var review of reviews) {
      if (review.restaurantId === this.id) {
        count++;
        total += review.rating;
      }
    }
    return (total/count);
  }
}

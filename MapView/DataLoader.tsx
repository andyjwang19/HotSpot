import spotsData from '../data/spots.json';
import peopleData from '../data/people.json';
import reviewData from '../data/reviews.json';
import Spot from '../models/Spot';
import Review from '../models/Review';
import Person from '../models/Person';
import { Activity } from '../models/filters';

export default class DataLoader {
    loadSpots() {
        return spotsData.map((s) => {
            return {
                ...s,
                activityType: s.activtyType as unknown as Activity,
                reviews: this.loadReviewsForSpotId(s.id),
            } as Spot;
        });
    }

    loadPeople() {
        return peopleData as Person[];
    }
    loadPeopleMap() {
        return new Map(this.loadPeople().map((p) => [p.id, p]));
    }

    loadReviews() {
        const people = this.loadPeopleMap();
        return reviewData.map((r) => {
            return {
                id: r.id,
                spotId: r.spotId,
                author: people.get(r.authorId),
                rating: r.rating,
                reviewText: r.review,
            } as Review;
        });
    }
    loadReviewsForSpotId(spotId: number) {
        return this.loadReviews().filter((r) => r.spotId === spotId);
    }
}

import { Activity } from './filters';

export enum Rating {
    MID,
    LIKE,
    LOVE,
}

interface Review {
    author: string;
    reviewText: string;
    rating: Rating;
}

interface Location {
    longitude: number;
    latitude: number;
}

export default interface Spot extends Location {
    id: number;
    name: string;
    activityType: Activity;
    suggestor: string; //add people objects
    reviews: Review[];
}

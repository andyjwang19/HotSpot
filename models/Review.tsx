import Person from './Person';

export enum Rating {
    MID,
    LIKE,
    LOVE,
}

export default interface Review {
    id: number;
    spotId: number;
    author: Person;
    reviewText: string;
    rating: Rating;
}

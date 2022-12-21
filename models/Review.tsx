import Person from './Person';

export enum Rating {
    OKAY,
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

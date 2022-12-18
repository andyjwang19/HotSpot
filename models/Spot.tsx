import { Activity } from './filters';
import Review from './Review';

interface Location {
    longitude: number;
    latitude: number;
}

interface Address {
    street: string;
    city: string;
    state: string;
}

export default interface Spot extends Location {
    id: number;
    name: string;
    activityType: Activity;
    reviews: Review[];
    address?: Address;
}

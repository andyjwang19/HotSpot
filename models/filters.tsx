export enum Activity {
    None,
    Food,
    Drink,
    Fun,
}

export interface FilterOptions {
    activities: Activity; //[]
    price: number;
}

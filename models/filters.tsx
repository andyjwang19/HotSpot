export enum Activity {
    None,
    Food = 'Food',
    Drink = 'Drink',
    Fun = 'Fun',
}

export interface FilterOptions {
    // activities: Activity; //[]
    foodSelected: boolean;
    drinkSelected: boolean;
    funSelected: boolean;
    price: number;
}

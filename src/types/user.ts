import {Document} from 'mongoose';

interface Address {
    add1: string;
    add2: string;
    add3: string;
    city: string;
    state: string;
    country: string;
    zip: number;
}

export interface User extends Document {
    username: string;
    readonly password: string;
    seller: boolean;
    address: Address;
    created: Date;
}
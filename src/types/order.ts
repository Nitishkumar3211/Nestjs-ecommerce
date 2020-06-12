import { Document } from 'mongoose';
import { User } from './user';
import { Product } from './product';

interface ProductOrder {
    product: Product;
    quantity: number;
}

export interface Orders extends Document {
    owner: User;
    totalPrice: number;
    products: ProductOrder[];
    created: Date;

}
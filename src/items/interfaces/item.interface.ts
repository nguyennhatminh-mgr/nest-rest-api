import {Document} from 'mongoose';

export interface Item{
    id?: string;
    name: string;
    description?: string;
    quantity: number;
}
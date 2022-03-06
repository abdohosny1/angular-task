import { DiscountOffers } from './DiscountOffers';
export interface IHome{
    id:number;
    name:string;
    quentity:number;
    price:number;
    old_price:number;
    discount:number;
    image:string;
    description:string;
    pres:DiscountOffers
    images:[];

}
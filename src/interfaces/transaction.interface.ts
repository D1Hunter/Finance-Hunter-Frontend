import { ICategory } from "./category.interface";

export interface ITransaction {
    id:string;
    ammount:number;
    type:string;
    description:string;
    category:ICategory;
    createdAt:Date;
}
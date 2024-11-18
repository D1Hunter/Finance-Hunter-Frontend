import { ICategory } from "./category.interface";

export interface ITransaction {
    id:string;
    ammount:string;
    type:string;
    description:string;
    category:ICategory;
    createdAt:Date;
}
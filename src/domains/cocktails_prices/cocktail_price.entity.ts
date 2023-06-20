import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Cocktail } from "../cocktails/cocktail.entity";

export class CocktailPrice {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    price: number;

    @Column()
    isHappyHour: boolean;

    @ManyToOne(() => Cocktail, cocktail => cocktail.prices)
    cocktail: Cocktail;
}

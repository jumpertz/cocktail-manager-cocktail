import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cocktail } from "../cocktails/cocktail.entity";
import { Ingredient } from "../ingredients/ingredient.entity";

export class CocktailIngredient {
    @PrimaryGeneratedColumn('uuid')
    cocktailId: string;

    @PrimaryGeneratedColumn('uuid')
    ingredientId: string;

    @ManyToOne(() => Cocktail, cocktail => cocktail.ingredients)
    cocktail: Cocktail;

    @ManyToOne(() => Ingredient, ingredient => ingredient.cocktails)
    ingredient: Ingredient;

    @Column()
    quantity: number;

}

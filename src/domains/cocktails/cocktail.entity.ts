import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Ingredient } from "../ingredients/ingredient.entity";
import { CocktailIngredient } from "../cocktails_ingredients/cocktails_ingredients.entity";

export class Cocktail {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    manager: string;

    @OneToMany(() => CocktailIngredient, (ci) => ci.cocktail)
    ingredients: CocktailIngredient[];
}

import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Ingredient } from "../ingredients/ingredient.entity";
import { CocktailIngredient } from "../cocktails_ingredients/cocktail_ingredient.entity";
import { CocktailStep } from "../cocktails_steps/cocktail_step.entity";
import { CocktailPrice } from "../cocktails_prices/cocktail_price.entity";

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

    @OneToMany(() => CocktailStep, (cs) => cs.cocktail)
    steps: CocktailStep[];

    @OneToMany(() => CocktailPrice, (cp) => cp.cocktail)
    prices: CocktailPrice[];
}

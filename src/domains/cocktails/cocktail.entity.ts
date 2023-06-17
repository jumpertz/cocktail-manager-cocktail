import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Ingredient } from "../ingredients/ingredient.entity";
import { CocktailIngredient } from "../cocktails_ingredients/cocktail_ingredient.entity";
import { CocktailStep } from "../cocktais_steps/cocktail_step.entity";

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
}

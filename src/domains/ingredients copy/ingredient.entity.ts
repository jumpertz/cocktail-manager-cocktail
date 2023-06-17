import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CocktailIngredient } from "../cocktails_ingredients/cocktail_ingredient.entity";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    unit: string;

    @Column()
    allergen: boolean;

    @OneToMany(() => CocktailIngredient, (ci) => ci.ingredient)
    cocktails: CocktailIngredient[];
}

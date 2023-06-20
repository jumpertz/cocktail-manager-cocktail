import { Column, CreateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CocktailIngredient } from "../cocktails_ingredients/cocktail_ingredient.entity";
import { CocktailStep } from "../cocktails_steps/cocktail_step.entity";
import { CocktailPrice } from "../cocktails_prices/cocktail_price.entity";
import { Exclude } from "class-transformer";

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

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @Exclude()
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    @Exclude()
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    @Exclude()
    deletedAt: Date | null;
}

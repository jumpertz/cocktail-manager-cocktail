import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Ingredient } from "../ingredients/ingredient.entity";
import { CocktailStep } from "../cocktails_steps/cocktail_step.entity";
import { Exclude } from "class-transformer";

@Entity()
export class CocktailStepIngredient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    position: number;

    @Column()
    description: string;

    @ManyToOne(() => CocktailStep, cocktailStep => cocktailStep.cocktailStepIngredients)
    cocktailStep: CocktailStep;

    @ManyToOne(() => Ingredient, ingredient => ingredient.cocktailStepIngredients)
    ingredient: Ingredient;

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

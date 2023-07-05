import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cocktail } from "../cocktails/cocktail.entity";
import { Exclude } from "class-transformer";
import { CocktailStepIngredient } from "../cocktails_steps_ingredients/cocktail_step_ingredient.entity";

@Entity()
export class CocktailStep {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    position: number;

    @Column()
    description: string;

    @ManyToOne(() => Cocktail, cocktail => cocktail.steps)
    cocktail: Cocktail;

    @OneToMany(() => CocktailStepIngredient, cocktailStepIngredient => cocktailStepIngredient.cocktailStep)
    cocktailStepIngredients: CocktailStepIngredient[];

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

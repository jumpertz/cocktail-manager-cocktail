import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cocktail } from "../cocktails/cocktail.entity";
import { Ingredient } from "../ingredients/ingredient.entity";
import { Exclude } from "class-transformer";

@Entity()
export class CocktailIngredient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Cocktail, cocktail => cocktail.ingredients)
    cocktail: Cocktail;

    @ManyToOne(() => Ingredient, ingredient => ingredient.cocktails)
    ingredient: Ingredient;

    @Column()
    quantity: number;

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
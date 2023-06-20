import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CocktailIngredient } from "../cocktails_ingredients/cocktail_ingredient.entity";
import { Exclude } from "class-transformer";

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

    @Column()
    stock: number;

    @Column()
    stockAlert: number;

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

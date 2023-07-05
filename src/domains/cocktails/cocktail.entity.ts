import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { CocktailIngredient } from "../cocktails_ingredients/cocktail_ingredient.entity";
import { CocktailStep } from "../cocktails_steps/cocktail_step.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Cocktail {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    // @Column()
    // image: string;

    @Column()
    managerId: string;

    // @OneToMany(() => CocktailIngredient, (ci) => ci.cocktail)
    // ingredients: CocktailIngredient[];

    @OneToMany(() => CocktailStep, (cs) => cs.cocktail)
    steps: CocktailStep[];

    @Column({ type: 'float' })
    price: number;

    @Column({ type: 'float' })
    HHPrice: number;

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

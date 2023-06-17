import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cocktail } from "../cocktails/cocktail.entity";

@Entity()
export class CocktailStep {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    position: number;

    @ManyToOne(() => Cocktail, cocktail => cocktail.steps)
    cocktail: Cocktail;
}

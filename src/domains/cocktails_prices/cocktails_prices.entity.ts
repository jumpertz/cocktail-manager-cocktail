import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

export class CocktailPrice {
    @PrimaryGeneratedColumn('uuid')
    @Exclude()
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    manager: string;
}

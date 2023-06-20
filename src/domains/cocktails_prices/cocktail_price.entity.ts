import { Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Cocktail } from "../cocktails/cocktail.entity";

export class CocktailPrice {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    price: number;

    @Column()
    isHappyHour: boolean;

    @ManyToOne(() => Cocktail, cocktail => cocktail.prices)
    cocktail: Cocktail;

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

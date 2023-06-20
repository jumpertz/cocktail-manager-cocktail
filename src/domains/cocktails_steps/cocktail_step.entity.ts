import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cocktail } from "../cocktails/cocktail.entity";
import { Exclude } from "class-transformer";

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

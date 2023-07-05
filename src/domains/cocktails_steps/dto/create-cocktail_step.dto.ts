import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { Cocktail } from "src/domains/cocktails/cocktail.entity";
import { DeepPartial } from "typeorm";

export class CreateCocktailStepDto {

    @IsNotEmpty()
    @IsUUID()
    cocktail: DeepPartial<Cocktail>;

    @IsNotEmpty()
    @IsNumber()
    position: number;

    @IsNotEmpty()
    @IsString()
    description: string;

}

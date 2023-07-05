import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateCocktailStepDto {

    @IsNotEmpty()
    cocktail: { id: string };

    @IsNotEmpty()
    @IsNumber()
    position: number;

    @IsNotEmpty()
    @IsString()
    description: string;
}

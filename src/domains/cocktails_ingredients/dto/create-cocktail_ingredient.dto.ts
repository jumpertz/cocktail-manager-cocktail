import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class CreateCocktailIngredientDto {

    @IsNotEmpty()
    @IsUUID()
    cocktailId: string;

    @IsNotEmpty()
    @IsUUID()
    ingredientId: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

}

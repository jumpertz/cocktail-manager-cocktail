import { IsNumber } from "class-validator";

export class CreateCocktailIngredientDto {

    cocktailId: string;

    ingredientId: string;

    @IsNumber()
    quantity: number;
}

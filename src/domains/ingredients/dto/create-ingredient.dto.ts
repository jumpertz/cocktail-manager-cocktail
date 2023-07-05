import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { CocktailStepIngredient } from "src/domains/cocktails_steps_ingredients/cocktail_step_ingredient.entity";
import { DeepPartial } from "typeorm";

export class CreateIngredientDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    unit: string;

    @IsNotEmpty()
    @IsBoolean()
    allergen: boolean;

    @IsNumber()
    stock: number;

    @IsNumber()
    stockAlert: number;
}

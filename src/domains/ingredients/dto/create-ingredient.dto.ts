import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { CocktailIngredient } from "src/domains/cocktails_ingredients/cocktail_ingredient.entity";
import { DeepPartial } from "typeorm";

export class CreateIngredientDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    unit: string;

    @IsNotEmpty()
    @IsBoolean()
    allergen: boolean;

    @IsNotEmpty()
    @IsNumber()
    stock: number;

    @IsNotEmpty()
    @IsNumber()
    stockAlert: number;

    cocktails: DeepPartial<CocktailIngredient[]>;

}

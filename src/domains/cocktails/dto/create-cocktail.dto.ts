import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateCocktailIngredientDto } from "src/domains/cocktails_ingredients/dto/create-cocktail_ingredient.dto";
import { CreateCocktailPriceDto } from "src/domains/cocktails_prices/dto/create-cocktail_price.dto";
import { CreateCocktailStepDto } from "src/domains/cocktails_steps/dto/create-cocktail_step.dto";

export class CreateCocktailDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    // @IsNotEmpty()
    // image: string;

    @ValidateNested({ each: true })
    @Type(() => CreateCocktailPriceDto)
    cocktailPrices: CreateCocktailPriceDto[];

    @ValidateNested({ each: true })
    @Type(() => CreateCocktailIngredientDto)
    cocktailIngredients: CreateCocktailIngredientDto[];

    @ValidateNested({ each: true })
    @Type(() => CreateCocktailStepDto)
    cocktailSteps: CreateCocktailStepDto[];
}

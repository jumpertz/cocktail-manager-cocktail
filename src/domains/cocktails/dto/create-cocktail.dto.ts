import { IsNotEmpty } from "class-validator";
import { CocktailIngredient } from "src/domains/cocktails_ingredients/cocktail_ingredient.entity";
import { CocktailPrice } from "src/domains/cocktails_prices/cocktail_price.entity";
import { CocktailStep } from "src/domains/cocktails_steps/cocktail_step.entity";

export class CreateCocktailDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    image: string;

    cocktailPrices: CocktailPrice[];

    cocktailIngredients: CocktailIngredient[];

    cocktailSteps: CocktailStep[];
}

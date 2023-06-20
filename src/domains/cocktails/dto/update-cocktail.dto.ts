import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailDto } from './create-cocktail.dto';
import { CocktailPrice } from 'src/domains/cocktails_prices/cocktail_price.entity';
import { CocktailIngredient } from 'src/domains/cocktails_ingredients/cocktail_ingredient.entity';
import { CocktailStep } from 'src/domains/cocktails_steps/cocktail_step.entity';

export class UpdateCocktailDto extends PartialType(CreateCocktailDto) {
    id: string;
}

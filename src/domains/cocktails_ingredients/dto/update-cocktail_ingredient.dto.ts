import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailIngredientDto } from './create-cocktail_ingredient.dto';

export class UpdateCocktailIngredientDto extends PartialType(CreateCocktailIngredientDto) {
  id: number;
}

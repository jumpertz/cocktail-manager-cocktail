import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailIngredientDto } from './create-cocktails_ingredients.dto';

export class UpdateCocktailIngredientDto extends PartialType(CreateCocktailIngredientDto) {
  id: number;
}

import { Module } from '@nestjs/common';
import { CocktailIngredientService } from './cocktail_ingredient.service';
import { CocktailIngredientController } from './cocktail_ingredient.controller';

@Module({
  controllers: [CocktailIngredientController],
  providers: [CocktailIngredientService]
})
export class CocktailIngredientModule { }

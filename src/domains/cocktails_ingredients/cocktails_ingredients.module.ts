import { Module } from '@nestjs/common';
import { CocktailIngredientService } from './cocktails_ingredients.service';
import { CocktailIngredientController } from './cocktails_ingredients.controller';

@Module({
  controllers: [CocktailIngredientController],
  providers: [CocktailIngredientService]
})
export class CocktailModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailStepIngredient } from './cocktail_step_ingredient.entity';
import { CocktailStepIngredientService } from './cocktail_step_ingredient.service';
import { CocktailStepIngredientController } from './cocktail_step_ingredient.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CocktailStepIngredient,
    ]),
  ],
  controllers: [CocktailStepIngredientController],
  providers: [CocktailStepIngredientService]
})
export class CocktailStepIngredientModule { }

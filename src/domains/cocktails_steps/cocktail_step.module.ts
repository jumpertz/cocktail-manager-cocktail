import { Module } from '@nestjs/common';
import { CocktailStepService } from './cocktail_step.service';
import { CocktailStepController } from './cocktail_step.controller';
import { CocktailStep } from './cocktail_step.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailStepIngredientService } from '../cocktails_steps_ingredients/cocktail_step_ingredient.service';
import { CocktailStepIngredient } from '../cocktails_steps_ingredients/cocktail_step_ingredient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CocktailStep,
      CocktailStepIngredient
    ]),
  ],
  controllers: [CocktailStepController],
  providers: [CocktailStepService, CocktailStepIngredientService]
})
export class CocktailStepModule { }

import { Module } from '@nestjs/common';
import { CocktailModule } from './domains/cocktails/cocktail.module';
import { IngredientModule } from './domains/ingredients/ingredient.module';
import { CocktailStepModule } from './domains/cocktails_steps/cocktail_step.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { CocktailStepIngredientModule } from './domains/cocktails_steps_ingredients/cocktail_step_ingredient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    CocktailModule,
    IngredientModule,
    CocktailStepModule,
    CocktailStepIngredientModule,
  ],
})
export class AppModule { }

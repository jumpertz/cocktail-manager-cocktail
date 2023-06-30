import { Module } from '@nestjs/common';
import { CocktailModule } from './domains/cocktails/cocktail.module';
import { IngredientModule } from './domains/ingredients/ingredient.module';
import { CocktailIngredientModule } from './domains/cocktails_ingredients/cocktail_ingredient.module';
import { CocktailPriceModule } from './domains/cocktails_prices/cocktail_price.module';
import { CocktailStepModule } from './domains/cocktails_steps/cocktail_step.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    CocktailModule,
    IngredientModule,
    CocktailIngredientModule,
    CocktailPriceModule,
    CocktailStepModule,
  ],
})
export class AppModule { }

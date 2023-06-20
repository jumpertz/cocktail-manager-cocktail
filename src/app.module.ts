import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailModule } from './domains/cocktails/cocktail.module';
import { IngredientModule } from './domains/ingredients/ingredient.module';
import { CocktailIngredientModule } from './domains/cocktails_ingredients/cocktail_ingredient.module';
import { CocktailStepModule } from './domains/cocktails_steps/cocktail_step.module';
import { CocktailPriceModule } from './domains/cocktails_prices/cocktail_price.module';

@Module({
  imports: [
    CocktailModule,
    IngredientModule,
    CocktailIngredientModule,
    CocktailStepModule,
    CocktailPriceModule
  ],
  controllers: [
    AppController,

  ],
  providers: [
    AppService
  ],
})
export class AppModule { }

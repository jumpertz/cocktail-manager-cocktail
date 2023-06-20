import { Module } from '@nestjs/common';
import { CocktailPriceService } from './cocktail_price.service';
import { CocktailPriceController } from './cocktail_price.controller';

@Module({
  controllers: [CocktailPriceController],
  providers: [CocktailPriceService]
})
export class CocktailPriceModule { }

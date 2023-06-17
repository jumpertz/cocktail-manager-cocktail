import { Module } from '@nestjs/common';
import { CocktailPriceService } from './cocktails_prices.service';
import { CocktailPriceController } from './cocktails_prices.controller';

@Module({
  controllers: [CocktailPriceController],
  providers: [CocktailPriceService]
})
export class CocktailModule { }

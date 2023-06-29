import { Module } from '@nestjs/common';
import { CocktailPriceService } from './cocktail_price.service';
import { CocktailPriceController } from './cocktail_price.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailPrice } from './cocktail_price.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CocktailPrice,
    ]),
  ],
  controllers: [CocktailPriceController],
  providers: [CocktailPriceService]
})
export class CocktailPriceModule { }

import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailPriceDto } from './create-cocktails_prices.dto';

export class UpdateCocktailPriceDto extends PartialType(CreateCocktailPriceDto) {
  id: number;
}

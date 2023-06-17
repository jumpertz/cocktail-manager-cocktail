import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailPriceDto } from './create-cocktail_price.dto';

export class UpdateCocktailPriceDto extends PartialType(CreateCocktailPriceDto) {
  id: number;
}

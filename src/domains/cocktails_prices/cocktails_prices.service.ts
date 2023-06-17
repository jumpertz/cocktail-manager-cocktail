import { Injectable } from '@nestjs/common';
import { CreateCocktailPriceDto } from './dto/create-cocktails_prices.dto';
import { UpdateCocktailPriceDto } from './dto/update-cocktails_prices.dto';

@Injectable()
export class CocktailPriceService {
  create(createCocktailPriceDto: CreateCocktailPriceDto) {
    return 'This action adds a new cocktail';
  }

  findAll() {
    return `This action returns all cocktail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cocktail`;
  }

  update(id: number, updateCocktailPriceDto: UpdateCocktailPriceDto) {
    return `This action updates a #${id} cocktail`;
  }

  remove(id: number) {
    return `This action removes a #${id} cocktail`;
  }
}

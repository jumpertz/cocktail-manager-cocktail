import { Injectable } from '@nestjs/common';
import { CreateCocktailPriceDto } from './dto/create-cocktail_price.dto';
import { UpdateCocktailPriceDto } from './dto/update-cocktail_price.dto';

@Injectable()
export class CocktailPriceService {
  create(createCocktailPriceDto: CreateCocktailPriceDto) {
    return 'This action adds a new cocktail';
  }

  findAll() {
    return `This action returns all cocktail`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cocktail`;
  }

  update(id: string, updateCocktailPriceDto: UpdateCocktailPriceDto) {
    return `This action updates a #${id} cocktail`;
  }

  remove(id: string) {
    return `This action removes a #${id} cocktail`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCocktailIngredientDto } from './dto/create-cocktails_ingredients.dto';
import { UpdateCocktailIngredientDto } from './dto/update-cocktails_ingredients.dto';

@Injectable()
export class CocktailIngredientService {
  create(createCocktailIngredientDto: CreateCocktailIngredientDto) {
    return 'This action adds a new cocktail';
  }

  findAll() {
    return `This action returns all cocktail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cocktail`;
  }

  update(id: number, updateCocktailIngredientDto: UpdateCocktailIngredientDto) {
    return `This action updates a #${id} cocktail`;
  }

  remove(id: number) {
    return `This action removes a #${id} cocktail`;
  }
}

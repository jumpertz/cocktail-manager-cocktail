import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientService {
  create(createIngredientDto: CreateIngredientDto) {
    return 'This action adds a new cocktail';
  }

  findAll() {
    return `This action returns all cocktail`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cocktail`;
  }

  update(id: string, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} cocktail`;
  }

  remove(id: string) {
    return `This action removes a #${id} cocktail`;
  }
}

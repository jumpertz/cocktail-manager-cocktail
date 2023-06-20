import { Injectable } from '@nestjs/common';
import { CreateCocktailStepDto } from './dto/create-cocktail_step.dto';
import { UpdateCocktailStepDto } from './dto/update-cocktail_step.dto';

@Injectable()
export class CocktailStepService {
  create(createCocktailStepDto: CreateCocktailStepDto) {
    return 'This action adds a new cocktail';
  }

  findAll() {
    return `This action returns all cocktail`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cocktail`;
  }

  update(id: string, updateCocktailStepDto: UpdateCocktailStepDto) {
    return `This action updates a #${id} cocktail`;
  }

  remove(id: string) {
    return `This action removes a #${id} cocktail`;
  }
}

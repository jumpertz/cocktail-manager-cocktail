import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CocktailStepIngredient } from './cocktail_step_ingredient.entity';
import { CreateCocktailStepIngredientDto } from './dto/create-cocktail_step_ingredient.dto';
import { UpdateCocktailStepIngredientDto } from './dto/update-cocktail_step_ingredient.dto';

@Injectable()
export class CocktailStepIngredientService {
  constructor(
    @InjectRepository(CocktailStepIngredient)
    private cocktailStepRepository: Repository<CocktailStepIngredient>,
  ) { }

  async create(createCocktailStepIngredientDto: CreateCocktailStepIngredientDto): Promise<CocktailStepIngredient> {
    const newCocktailStepIngredient = this.cocktailStepRepository.create(createCocktailStepIngredientDto);
    return this.cocktailStepRepository.save(newCocktailStepIngredient);
  }

  findAll(): Promise<CocktailStepIngredient[]> {
    return this.cocktailStepRepository.find();
  }

  findOne(id: string): Promise<CocktailStepIngredient> {
    return this.cocktailStepRepository.findOneBy({ id });
  }

  async update(id: string, updateCocktailStepIngredientDto: UpdateCocktailStepIngredientDto): Promise<CocktailStepIngredient> {
    await this.cocktailStepRepository.update(id, updateCocktailStepIngredientDto);
    return this.cocktailStepRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.cocktailStepRepository.delete(id);
  }
}
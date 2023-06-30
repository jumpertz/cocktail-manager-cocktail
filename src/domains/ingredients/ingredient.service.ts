import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) { }

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const newIngredient = this.ingredientRepository.create(createIngredientDto);
    await this.ingredientRepository.save(newIngredient);
    return newIngredient;

  }

  async findAll(): Promise<Ingredient[]> {
    return await this.ingredientRepository.find();
  }

  async findOne(id: string): Promise<Ingredient> {
    return await this.ingredientRepository.findOneBy({ id });
  }

  async update(id: string, updateIngredientDto: UpdateIngredientDto): Promise<Ingredient> {
    await this.ingredientRepository.update(id, updateIngredientDto);
    return this.ingredientRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.ingredientRepository.delete(id);
  }
}

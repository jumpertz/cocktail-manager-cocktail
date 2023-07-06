import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CocktailStep } from './cocktail_step.entity';
import { CreateCocktailStepDto } from './dto/create-cocktail_step.dto';
import { UpdateCocktailStepDto } from './dto/update-cocktail_step.dto';

@Injectable()
export class CocktailStepService {
  constructor(
    @InjectRepository(CocktailStep)
    private cocktailStepRepository: Repository<CocktailStep>,
  ) { }

  async create(createCocktailStepDto: CreateCocktailStepDto): Promise<CocktailStep> {
    const newCocktailStep = this.cocktailStepRepository.create(createCocktailStepDto);
    return this.cocktailStepRepository.save(newCocktailStep);
  }

  findAll(): Promise<CocktailStep[]> {
    return this.cocktailStepRepository.find();
  }

  findOne(id: string): Promise<CocktailStep> {
    return this.cocktailStepRepository.findOneBy({ id });
  }

  async update(id: string, updateCocktailStepDto: UpdateCocktailStepDto): Promise<CocktailStep> {
    console.log('updateCocktailStepDto', updateCocktailStepDto)
    await this.cocktailStepRepository.update(id, updateCocktailStepDto);
    return this.cocktailStepRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.cocktailStepRepository.delete(id);
  }
}
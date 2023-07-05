import { Injectable } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cocktail } from './cocktail.entity';
import { Ingredient } from '../ingredients/ingredient.entity';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(Cocktail)
    private readonly cocktailRepository: Repository<Cocktail>
  ) { }

  async create(createCocktailDto: CreateCocktailDto): Promise<Cocktail> {
    const newCocktail = this.cocktailRepository.create(createCocktailDto);
    await this.cocktailRepository.save(newCocktail);
    return newCocktail;
  }

  async findAll(): Promise<Cocktail[]> {
    return await this.cocktailRepository.find();
  }

  async findOne(id: string): Promise<Cocktail> {
    return await this.cocktailRepository.findOne(
      {
        where: { id },
        relations: {
          steps: {
            cocktailStepIngredients: {
              ingredient: true,
            }
          }
        },
        order: {
          steps: {
            position: 'ASC',
            cocktailStepIngredients: {
              position: 'ASC',
            }
          },
        }
      });
  }

  async update(id: string, updateCocktailDto: UpdateCocktailDto): Promise<Cocktail> {
    await this.cocktailRepository.update(id, updateCocktailDto);
    return this.cocktailRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.cocktailRepository.delete(id);
  }
}

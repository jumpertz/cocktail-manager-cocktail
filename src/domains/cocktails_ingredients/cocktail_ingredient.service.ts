import { Injectable } from '@nestjs/common';
import { CreateCocktailIngredientDto } from './dto/create-cocktail_ingredient.dto';
import { UpdateCocktailIngredientDto } from './dto/update-cocktail_ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CocktailIngredient } from './cocktail_ingredient.entity';

@Injectable()
export class CocktailIngredientService {
    constructor(
        @InjectRepository(CocktailIngredient)
        private readonly cocktailIngredientRepository: Repository<CocktailIngredient>,
    ) { }

    async create(createCocktailIngredientDto: CreateCocktailIngredientDto): Promise<CocktailIngredient> {
        const newCocktailIngredient = this.cocktailIngredientRepository.create(createCocktailIngredientDto);
        await this.cocktailIngredientRepository.save(newCocktailIngredient);
        return newCocktailIngredient;
    }

    async findAll(): Promise<CocktailIngredient[]> {
        return await this.cocktailIngredientRepository.find();
    }

    async findOne(id: string): Promise<CocktailIngredient> {
        return await this.cocktailIngredientRepository.findOneBy({ id });
    }

    async update(id: string, updateCocktailIngredientDto: UpdateCocktailIngredientDto): Promise<CocktailIngredient> {
        await this.cocktailIngredientRepository.update({ id }, updateCocktailIngredientDto);
        return this.cocktailIngredientRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.cocktailIngredientRepository.delete({ id });
    }
}

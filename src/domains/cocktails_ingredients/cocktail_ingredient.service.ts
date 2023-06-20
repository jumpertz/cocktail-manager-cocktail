import { Injectable } from '@nestjs/common';
import { CreateCocktailIngredientDto } from './dto/create-cocktail_ingredient.dto';
import { UpdateCocktailIngredientDto } from './dto/update-cocktail_ingredient.dto';

@Injectable()
export class CocktailIngredientService {
    create(createCocktailIngredientDto: CreateCocktailIngredientDto) {
        return 'This action adds a new cocktail';
    }

    findAll() {
        return `This action returns all cocktail`;
    }

    findOne(id: string) {
        return `This action returns a #${id} cocktail`;
    }

    update(id: string, updateCocktailIngredientDto: UpdateCocktailIngredientDto) {
        return `This action updates a #${id} cocktail`;
    }

    remove(id: string) {
        return `This action removes a #${id} cocktail`;
    }
}

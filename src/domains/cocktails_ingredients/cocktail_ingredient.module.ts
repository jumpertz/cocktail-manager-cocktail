import { Module } from '@nestjs/common';
import { CocktailIngredientService } from './cocktail_ingredient.service';
import { CocktailIngredientController } from './cocktail_ingredient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailIngredient } from './cocktail_ingredient.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CocktailIngredient,
        ]),
    ],
    controllers: [CocktailIngredientController],
    providers: [CocktailIngredientService]
})
export class CocktailIngredientModule { }

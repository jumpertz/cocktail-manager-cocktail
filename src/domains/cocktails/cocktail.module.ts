import { Module } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CocktailController } from './cocktail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocktail } from './cocktail.entity';
import { CocktailStep } from '../cocktails_steps/cocktail_step.entity';
import { CocktailStepService } from '../cocktails_steps/cocktail_step.service';
import { CocktailStepIngredient } from '../cocktails_steps_ingredients/cocktail_step_ingredient.entity';
import { CocktailStepIngredientService } from '../cocktails_steps_ingredients/cocktail_step_ingredient.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Cocktail,
            CocktailStep,
            CocktailStepIngredient
        ]),
    ],
    controllers: [CocktailController],
    providers: [
        CocktailService,
        CocktailStepService,
        CocktailStepIngredientService
    ]
})
export class CocktailModule { }

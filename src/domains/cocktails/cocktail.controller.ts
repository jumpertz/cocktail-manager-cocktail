import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { CocktailStepService } from '../cocktails_steps/cocktail_step.service';
import { CocktailStepIngredientService } from '../cocktails_steps_ingredients/cocktail_step_ingredient.service';
import { CreateCocktailStepIngredientDto } from '../cocktails_steps_ingredients/dto/create-cocktail_step_ingredient.dto';
import { CreateCocktailStepDto } from '../cocktails_steps/dto/create-cocktail_step.dto';

@Controller()
export class CocktailController {
    constructor(
        private readonly cocktailService: CocktailService,
        private readonly cocktailStepService: CocktailStepService,
        private readonly cocktailStepIngredientService: CocktailStepIngredientService) { }

    @EventPattern('createCocktail')
    create(@Payload() createCocktailDto: CreateCocktailDto) {
        return this.cocktailService.create(createCocktailDto);
    }

    @EventPattern('findAllCocktail')
    findAll() {
        return this.cocktailService.findAll();
    }

    @EventPattern('findOneCocktail')
    findOne(@Payload() id: string) {
        return this.cocktailService.findOne(id);
    }

    @EventPattern('findOneDetailledCocktail')
    findOneDetailled(@Payload() id: string) {
        return this.cocktailService.findOneDetailled(id);
    }

    @EventPattern('findOneWithIngredientsCocktail')
    findOneWithIngredients(@Payload() id: string) {
        return this.cocktailService.findOneWithIngredients(id);
    }

    @EventPattern('updateCocktail')
    async update(@Payload() updateCocktailDto: UpdateCocktailDto) {
        const { id, steps, ...cocktailData } = updateCocktailDto;

        const c = await this.cocktailService.update(id, { id, ...cocktailData });

        if (!steps || steps.length === 0) {
            return c;
        }

        for (const step of steps) {
            const { cocktailStepIngredients, ...stepData } = step;
            if (c.steps.find(s => s.id === step.id)) {
                if (step.hasOwnProperty('id')) {
                    await this.cocktailStepService.update(step.id, stepData);
                } else {
                    await this.cocktailStepService.create(step as CreateCocktailStepDto);
                }
            }
            else {
                for (const cocktailStepIngredient of cocktailStepIngredients) {
                    await this.cocktailStepIngredientService.remove(cocktailStepIngredient.id);
                }
                await this.cocktailStepService.remove(step.id);
            }

            for (const cocktailStepIngredient of cocktailStepIngredients) {
                if (cocktailStepIngredient.hasOwnProperty('id')) {
                    const { ingredient, ...cocktailStepIngredientData } = cocktailStepIngredient;
                    await this.cocktailStepIngredientService.update(cocktailStepIngredient.id, cocktailStepIngredientData);
                } else {
                    await this.cocktailStepIngredientService.create(cocktailStepIngredient as CreateCocktailStepIngredientDto);
                }
            }
        }

        return c;
    }

    @EventPattern('removeCocktail')
    remove(@Payload() id: string) {
        return this.cocktailService.remove(id);
    }
}

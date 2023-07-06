import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CocktailStepService } from './cocktail_step.service';
import { CreateCocktailStepDto } from './dto/create-cocktail_step.dto';
import { UpdateCocktailStepDto } from './dto/update-cocktail_step.dto';
import { UpdateCocktailStepIngredientDto } from '../cocktails_steps_ingredients/dto/update-cocktail_step_ingredient.dto';
import { CocktailStepIngredientService } from '../cocktails_steps_ingredients/cocktail_step_ingredient.service';
import { CreateCocktailStepIngredientDto } from '../cocktails_steps_ingredients/dto/create-cocktail_step_ingredient.dto';

@Controller()
export class CocktailStepController {
  constructor(
    private readonly cocktailStepService: CocktailStepService,
    private readonly cocktailStepIngredientService: CocktailStepIngredientService
  ) { }

  @EventPattern('createCocktailStep')
  create(@Payload() createCocktailStepDto: CreateCocktailStepDto) {
    return this.cocktailStepService.create(createCocktailStepDto);
  }

  @EventPattern('findAllCocktailStep')
  findAll() {
    return this.cocktailStepService.findAll();
  }

  @EventPattern('findOneCocktailStep')
  findOne(@Payload() id: string) {
    return this.cocktailStepService.findOne(id);
  }

  @EventPattern('updateCocktailStep')
  async update(@Payload() cocktailStep: UpdateCocktailStepDto) {
    const s = await this.cocktailStepService.update(cocktailStep.id, cocktailStep);
  }

  @EventPattern('removeCocktailStep')
  remove(@Payload() id: string) {
    return this.cocktailStepService.remove(id);
  }
}

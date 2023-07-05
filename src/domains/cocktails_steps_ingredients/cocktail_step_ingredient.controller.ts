import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailStepIngredientService } from './cocktail_step_ingredient.service';
import { CreateCocktailStepIngredientDto } from './dto/create-cocktail_step_ingredient.dto';
import { UpdateCocktailStepIngredientDto } from './dto/update-cocktail_step_ingredient.dto';

@Controller()
export class CocktailStepIngredientController {
  constructor(private readonly stepIngredientService: CocktailStepIngredientService) { }

  @MessagePattern('createCocktailStepIngredient')
  create(@Payload() createCocktailStepIngredientDto: CreateCocktailStepIngredientDto) {
    return this.stepIngredientService.create(createCocktailStepIngredientDto);
  }

  @MessagePattern('findAllCocktailStepIngredient')
  findAll() {
    return this.stepIngredientService.findAll();
  }

  @MessagePattern('findOneCocktailStepIngredient')
  findOne(@Payload() id: string) {
    return this.stepIngredientService.findOne(id);
  }

  @MessagePattern('updateCocktailStepIngredient')
  update(@Payload() updateCocktailStepIngredientDto: UpdateCocktailStepIngredientDto) {
    return this.stepIngredientService.update(updateCocktailStepIngredientDto.id, updateCocktailStepIngredientDto);
  }

  @MessagePattern('removeCocktailStepIngredient')
  remove(@Payload() id: string) {
    return this.stepIngredientService.remove(id);
  }
}

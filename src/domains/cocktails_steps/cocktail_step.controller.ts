import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailStepService } from './cocktail_step.service';
import { CreateCocktailStepDto } from './dto/create-cocktail_step.dto';
import { UpdateCocktailStepDto } from './dto/update-cocktail_step.dto';

@Controller()
export class CocktailStepController {
  constructor(private readonly ingredientService: CocktailStepService) { }

  @MessagePattern('createCocktailStep')
  create(@Payload() createCocktailStepDto: CreateCocktailStepDto) {
    return this.ingredientService.create(createCocktailStepDto);
  }

  @MessagePattern('findAllCocktailStep')
  findAll() {
    return this.ingredientService.findAll();
  }

  @MessagePattern('findOneCocktailStep')
  findOne(@Payload() id: string) {
    return this.ingredientService.findOne(id);
  }

  @MessagePattern('updateCocktailStep')
  update(@Payload() updateCocktailStepDto: UpdateCocktailStepDto) {
    return this.ingredientService.update(updateCocktailStepDto.id, updateCocktailStepDto);
  }

  @MessagePattern('removeCocktailStep')
  remove(@Payload() id: string) {
    return this.ingredientService.remove(id);
  }
}

import { ClassSerializerInterceptor, Controller, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailIngredientService } from './cocktails_ingredients.service';
import { CreateCocktailIngredientDto } from './dto/create-cocktails_ingredients.dto';
import { UpdateCocktailIngredientDto } from './dto/update-cocktails_ingredients.dto';

@Controller()
export class CocktailIngredientController {
  constructor(private readonly cocktailService: CocktailIngredientService) { }

  @MessagePattern('createCocktailIngredient')
  create(@Payload() createCocktailIngredientDto: CreateCocktailIngredientDto) {
    return this.cocktailService.create(createCocktailIngredientDto);
  }

  @MessagePattern('findAllCocktailIngredient')
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.cocktailService.findAll();
  }

  @MessagePattern('findOneCocktailIngredient')
  findOne(@Payload() id: number) {
    return this.cocktailService.findOne(id);
  }

  @MessagePattern('updateCocktailIngredient')
  update(@Payload() updateCocktailIngredientDto: UpdateCocktailIngredientDto) {
    return this.cocktailService.update(updateCocktailIngredientDto.id, updateCocktailIngredientDto);
  }

  @MessagePattern('removeCocktailIngredient')
  remove(@Payload() id: number) {
    return this.cocktailService.remove(id);
  }
}

import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';

@Controller()
export class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {}

  @MessagePattern('createCocktail')
  create(@Payload() createCocktailDto: CreateCocktailDto) {
    return this.cocktailService.create(createCocktailDto);
  }

  @MessagePattern('findAllCocktail')
  findAll() {
    return this.cocktailService.findAll();
  }

  @MessagePattern('findOneCocktail')
  findOne(@Payload() id: number) {
    return this.cocktailService.findOne(id);
  }

  @MessagePattern('updateCocktail')
  update(@Payload() updateCocktailDto: UpdateCocktailDto) {
    return this.cocktailService.update(updateCocktailDto.id, updateCocktailDto);
  }

  @MessagePattern('removeCocktail')
  remove(@Payload() id: number) {
    return this.cocktailService.remove(id);
  }
}

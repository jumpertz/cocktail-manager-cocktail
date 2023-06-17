import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailPriceService } from './cocktail_price.service';
import { CreateCocktailPriceDto } from './dto/create-cocktail_price.dto';
import { UpdateCocktailPriceDto } from './dto/update-cocktail_price.dto';

@Controller()
export class CocktailPriceController {
  constructor(private readonly cocktailService: CocktailPriceService) { }

  @MessagePattern('createCocktailPrice')
  create(@Payload() createCocktailPriceDto: CreateCocktailPriceDto) {
    return this.cocktailService.create(createCocktailPriceDto);
  }

  @MessagePattern('findAllCocktailPrice')
  findAll() {
    return this.cocktailService.findAll();
  }

  @MessagePattern('findOneCocktailPrice')
  findOne(@Payload() id: number) {
    return this.cocktailService.findOne(id);
  }

  @MessagePattern('updateCocktailPrice')
  update(@Payload() updateCocktailPriceDto: UpdateCocktailPriceDto) {
    return this.cocktailService.update(updateCocktailPriceDto.id, updateCocktailPriceDto);
  }

  @MessagePattern('removeCocktailPrice')
  remove(@Payload() id: number) {
    return this.cocktailService.remove(id);
  }
}

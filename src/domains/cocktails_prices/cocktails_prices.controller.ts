import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailPriceService } from './cocktails_prices.service';
import { CreateCocktailPriceDto } from './dto/create-cocktails_prices.dto';
import { UpdateCocktailPriceDto } from './dto/update-cocktails_prices.dto';

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

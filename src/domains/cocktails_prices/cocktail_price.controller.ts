import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailPriceService } from './cocktail_price.service';
import { UpdateCocktailPriceDto } from './dto/update-cocktail_price.dto';

@Controller()
export class CocktailPriceController {
  constructor(private readonly cocktailService: CocktailPriceService) { }
  @MessagePattern('findOneCocktailPrice')
  findOne(@Payload() id: string) {
    return this.cocktailService.findOne(id);
  }

  @MessagePattern('updateCocktailPrice')
  update(@Payload() updateCocktailPriceDto: UpdateCocktailPriceDto) {
    return this.cocktailService.update(updateCocktailPriceDto.id, updateCocktailPriceDto);
  }

  @MessagePattern('removeCocktailPrice')
  remove(@Payload() id: string) {
    return this.cocktailService.remove(id);
  }
}

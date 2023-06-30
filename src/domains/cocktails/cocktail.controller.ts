import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';

@Controller()
export class CocktailController {
    constructor(private readonly cocktailService: CocktailService) { }

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

    @EventPattern('updateCocktail')
    update(@Payload() updateCocktailDto: UpdateCocktailDto) {
        return this.cocktailService.update(updateCocktailDto.id, updateCocktailDto);
    }

    @EventPattern('removeCocktail')
    remove(@Payload() id: string) {
        return this.cocktailService.remove(id);
    }
}

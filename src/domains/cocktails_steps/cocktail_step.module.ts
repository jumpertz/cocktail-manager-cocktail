import { Module } from '@nestjs/common';
import { CocktailStepService } from './cocktail_step.service';
import { CocktailStepController } from './cocktail_step.controller';

@Module({
  controllers: [CocktailStepController],
  providers: [CocktailStepService]
})
export class CocktailStepModule { }

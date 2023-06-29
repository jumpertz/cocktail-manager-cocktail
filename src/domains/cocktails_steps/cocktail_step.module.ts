import { Module } from '@nestjs/common';
import { CocktailStepService } from './cocktail_step.service';
import { CocktailStepController } from './cocktail_step.controller';
import { CocktailStep } from './cocktail_step.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CocktailStep,
    ]),
  ],
  controllers: [CocktailStepController],
  providers: [CocktailStepService]
})
export class CocktailStepModule { }

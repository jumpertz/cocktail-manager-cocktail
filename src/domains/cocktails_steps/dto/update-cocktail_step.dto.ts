import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailStepDto } from './create-cocktail_step.dto';

export class UpdateCocktailStepDto extends PartialType(CreateCocktailStepDto) {
  id: number;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailStepDto } from './create-cocktail_step.dto';
import { IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DeepPartial } from 'typeorm';
import { UpdateCocktailStepIngredientDto } from 'src/domains/cocktails_steps_ingredients/dto/update-cocktail_step_ingredient.dto';

export class UpdateCocktailStepDto extends PartialType(CreateCocktailStepDto) {
  @IsUUID()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => UpdateCocktailStepIngredientDto)
  cocktailStepIngredients?: UpdateCocktailStepIngredientDto[];
}

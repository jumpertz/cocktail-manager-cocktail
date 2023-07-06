import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailStepIngredientDto } from './create-cocktail_step_ingredient.dto';
import { IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateIngredientDto } from 'src/domains/ingredients/dto/update-ingredient.dto';

export class UpdateCocktailStepIngredientDto extends PartialType(CreateCocktailStepIngredientDto) {
  @IsUUID()
  id: string;

  @ValidateNested()
  @Type(() => UpdateIngredientDto)
  ingredient?: UpdateIngredientDto;
}

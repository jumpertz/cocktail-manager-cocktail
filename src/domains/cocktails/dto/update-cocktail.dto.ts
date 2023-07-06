import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailDto } from './create-cocktail.dto';
import { IsUUID, ValidateNested } from 'class-validator';
import { UpdateCocktailStepDto } from 'src/domains/cocktails_steps/dto/update-cocktail_step.dto';
import { Type } from 'class-transformer';

export class UpdateCocktailDto extends PartialType(CreateCocktailDto) {
    @IsUUID()
    id: string;

    @ValidateNested({ each: true })
    @Type(() => UpdateCocktailStepDto)
    steps?: UpdateCocktailStepDto[];
}

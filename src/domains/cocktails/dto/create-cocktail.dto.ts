import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateCocktailStepDto } from "src/domains/cocktails_steps/dto/create-cocktail_step.dto";

export class CreateCocktailDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    // @IsNotEmpty()
    // image: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    HHPrice: number;

    @ValidateNested({ each: true })
    @Type(() => CreateCocktailStepDto)
    cocktailSteps: CreateCocktailStepDto[];

}

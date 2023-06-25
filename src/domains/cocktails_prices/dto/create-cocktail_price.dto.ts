import { IsBoolean, IsString } from "class-validator";

export class CreateCocktailPriceDto {
    @IsString()
    price: number;

    @IsBoolean()
    isHappyHour: boolean;
}

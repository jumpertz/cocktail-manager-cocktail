import { IsBoolean, IsNumber, IsUUID } from "class-validator";

export class CreateCocktailPriceDto {

    @IsUUID()
    cocktailId: string;

    @IsNumber()
    price: number;

    @IsBoolean()
    isHappyHour: boolean;

}

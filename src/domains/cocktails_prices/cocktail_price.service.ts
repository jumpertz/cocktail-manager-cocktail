import { Injectable } from '@nestjs/common';
import { CreateCocktailPriceDto } from './dto/create-cocktail_price.dto';
import { UpdateCocktailPriceDto } from './dto/update-cocktail_price.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CocktailPrice } from './cocktail_price.entity';

@Injectable()
export class CocktailPriceService {
  constructor(
    @InjectRepository(CocktailPrice)
    private readonly cocktailPriceRepository: Repository<CocktailPrice>,
  ) { }

  async create(createCocktailPriceDto: CreateCocktailPriceDto): Promise<CocktailPrice> {
    const newCocktailPrice = this.cocktailPriceRepository.create(createCocktailPriceDto);
    await this.cocktailPriceRepository.save(newCocktailPrice);
    return newCocktailPrice;
  }

  async findAll(): Promise<CocktailPrice[]> {
    return await this.cocktailPriceRepository.find();
  }

  async findOne(id: string): Promise<CocktailPrice> {
    return await this.cocktailPriceRepository.findOneBy({ id });
  }

  async update(id: string, updateCocktailPriceDto: UpdateCocktailPriceDto): Promise<CocktailPrice> {
    await this.cocktailPriceRepository.update(id, updateCocktailPriceDto);
    return this.cocktailPriceRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.cocktailPriceRepository.delete(id);
  }
}

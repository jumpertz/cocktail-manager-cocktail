import { Injectable } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cocktail } from './cocktail.entity';
import { Ingredient } from '../ingredients/ingredient.entity';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(Cocktail)
    private readonly cocktailRepository: Repository<Cocktail>
  ) { }

  async create(createCocktailDto: CreateCocktailDto): Promise<Cocktail> {
    const newCocktail = this.cocktailRepository.create(createCocktailDto);
    await this.cocktailRepository.save(newCocktail);
    return newCocktail;
  }

  async findAll(show: string[] = []): Promise<
    Cocktail[] |
    { cocktail: Cocktail, ingredients: Ingredient[] }[] |
    { cocktail: Cocktail, ingredients: Ingredient[], steps: number }[]
  > {

    const cocktails = [];

    const res = await this.cocktailRepository.find(
      {
        relations: {
          steps: {
            cocktailStepIngredients: {
              ingredient: true,
            }
          },
        },
      });

    if (!res || res.length < 1)
      return [];

    cocktails.push(...res.map(
      cocktail => {
        let ingredients: Ingredient[] = [];
        let stepCount = 0;

        ingredients = cocktail.steps.flatMap(step => step.cocktailStepIngredients.map(ingredient => ingredient.ingredient));
        stepCount = cocktail.steps.length;
        cocktail.steps = undefined;

        return { cocktail, ingredients, steps: stepCount };
      }
    ));

    return cocktails;
  }


  async findOne(id: string): Promise<Cocktail> {
    return await this.cocktailRepository.findOneBy({ id });
  }

  async findOneDetailled(id: string): Promise<Cocktail> {
    return await this.cocktailRepository.findOne(
      {
        where: { id },
        relations: {
          steps: {
            cocktailStepIngredients: {
              ingredient: true,
            }
          }
        },
        order: {
          steps: {
            position: 'ASC',
            cocktailStepIngredients: {
              position: 'ASC',
            }
          },
        }
      });
  }

  async findOneWithIngredients(id: string): Promise<{ cocktail: Cocktail, ingredients: Ingredient[] }> {
    let ingredients = [];
    let stepCount = 0;

    const cocktail = await this.cocktailRepository.findOne(
      {
        where: { id },
        relations: {
          steps: {
            cocktailStepIngredients: {
              ingredient: true,
            }
          },
        },
      });

    if (cocktail) {
      ingredients =
        cocktail.steps.flatMap(step => step.cocktailStepIngredients.map(ingredient => ingredient.ingredient))
          .filter((ingredient, index, self) =>
            index === self.findIndex((t) => (
              t.id === ingredient.id
            ))
          )
      stepCount = cocktail.steps.length;
      cocktail.steps = undefined;
    }

    return { cocktail, ingredients }
  }

  async update(id: string, updateCocktailDto: UpdateCocktailDto): Promise<Cocktail> {
    await this.cocktailRepository.update(id, updateCocktailDto);
    return this.cocktailRepository.findOne({
      where: { id },
      relations: {
        steps: {
          cocktailStepIngredients: {
            ingredient: true,
          }
        },
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.cocktailRepository.delete(id);
  }
}

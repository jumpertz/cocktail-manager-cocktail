import { Test, TestingModule } from '@nestjs/testing';
import { CocktailController } from './cocktail.controller';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';

describe('CocktailController', () => {
  let cocktailController: CocktailController;
  let cocktailService: CocktailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CocktailController],
      providers: [
        {
          provide: CocktailService,
          useValue: {
            create: jest.fn().mockResolvedValue('createCocktail'),
            findAll: jest.fn().mockResolvedValue('findAllCocktail'),
            findOne: jest.fn().mockResolvedValue('findOneCocktail'),
            update: jest.fn().mockResolvedValue('updateCocktail'),
            remove: jest.fn().mockResolvedValue('removeCocktail'),
          },
        },
      ],
    }).compile();

    cocktailController = module.get<CocktailController>(CocktailController);
    cocktailService = module.get<CocktailService>(CocktailService);
  });

  it('doit être défini', () => {
    expect(cocktailController).toBeDefined();
  });

  it('doit créer un cocktail', async () => {
    const dto: CreateCocktailDto = { ... };
    expect(await cocktailController.create(dto)).toBe('createCocktail');
    expect(cocktailService.create).toHaveBeenCalledWith(dto);
  });

  it('doit trouver tous les cocktails', async () => {
    expect(await cocktailController.findAll()).toBe('findAllCocktail');
    expect(cocktailService.findAll).toHaveBeenCalled();
  });

  it('doit trouver un cocktail', async () => {
    const id = '123';
    expect(await cocktailController.findOne(id)).toBe('findOneCocktail');
    expect(cocktailService.findOne).toHaveBeenCalledWith(id);
  });

  it('doit mettre à jour un cocktail', async () => {
    const dto: UpdateCocktailDto = { id: '123', ... };
    expect(await cocktailController.update(dto)).toBe('updateCocktail');
    expect(cocktailService.update).toHaveBeenCalledWith(dto.id, dto);
  });

  it('doit supprimer un cocktail', async () => {
    const id = '123';
    expect(await cocktailController.remove(id)).toBe('removeCocktail');
    expect(cocktailService.remove).toHaveBeenCalledWith(id);
  });
});

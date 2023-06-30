import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Cocktail } from 'src/domains/cocktails/cocktail.entity';
import { Ingredient } from 'src/domains/ingredients/ingredient.entity';

const IS_LOCAL: boolean = process.env.STAGE === 'local';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: IS_LOCAL,
  ssl: !IS_LOCAL,
  extra: IS_LOCAL
    ? {}
    : {
      ssl: {
        rejectUnauthorized: false,
      },
    },
};

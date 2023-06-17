import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailModule } from './domains/cocktails/cocktail.module';

@Module({
  imports: [CocktailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

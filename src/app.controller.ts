import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientTCP, Transport } from '@nestjs/microservices';
import { CreateCocktailDto } from './domains/cocktails/dto/create-cocktail.dto';

@Controller()
export class AppController {
  @Client({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001
    }
  })
  client: ClientTCP;

  @Post('createCocktail')
  async createCocktail(@Body() createCocktailDto: CreateCocktailDto) {
    return await this.client.send('createCocktail', createCocktailDto).toPromise();
  }
}

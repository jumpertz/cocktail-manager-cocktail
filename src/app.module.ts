import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientTCP } from '@nestjs/microservices';

@Module({
  imports: [
  ],
  controllers: [
    AppController,

  ],
  providers: [
    {
      provide: 'COCKTAIL_SERVICE',
      useFactory: () => {
        const client = new ClientTCP({
          host: 'localhost',
          port: 3001,
        });
        return client;
      }
    }
  ],
})
export class AppModule { }

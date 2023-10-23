import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PalindromoService } from './palindromo/palindromo.service';
import { PalindromoController } from './palindromo/palindromo.controller';

@Module({
  imports: [],
  controllers: [AppController, PalindromoController],
  providers: [AppService, PalindromoService],
})
export class AppModule {}

import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { PalindromoService } from './palindromo.service';
import { PalindromoDto } from './dto/palindromo.dto/palindromo.dto';
import { Response } from 'express';

interface ApiResponse {
  mensaje: string;
}

@Controller('palindromo')
export class PalindromoController {
  constructor(private readonly palindromoService: PalindromoService) {}

  

  @Post()
  createPalindrome(
    @Body() palindromoDto: PalindromoDto,
    @Res() res: Response<ApiResponse>,
  ): void {
    const realPalindromo = this.palindromoService.esPalindromo(palindromoDto);
    if (realPalindromo) {
      console.log(`${palindromoDto.cadena} es un palindromo.`);
      res
        .status(HttpStatus.OK)
        .json({ mensaje: `${palindromoDto.cadena} es un palindromo.` });
    } else {
      console.log(`${palindromoDto.cadena} no es un palindromo.`);
      res
        .status(HttpStatus.OK)
        .json({ mensaje: `${palindromoDto.cadena} no es un palindromo.` });
    }
  }
}

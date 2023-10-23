import { Injectable } from '@nestjs/common';
import { PalindromoDto } from './dto/palindromo.dto/palindromo.dto';

@Injectable()
export class PalindromoService {
  esPalindromo(palindromoDto: PalindromoDto): boolean {
    const limpiarCadena = palindromoDto.cadena
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '');
    const longitud = limpiarCadena.length;
    for (let i = 0; i < longitud / 2; i++) {
      if (limpiarCadena[i] !== limpiarCadena[longitud - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}

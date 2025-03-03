import { Controller, Get, Req } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Request } from 'express';
import { IResponse, IRespInfo, ICharacterDetails } from 'src/types/interface';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async getCharacters(
    @Query('page') page: number,
    @Query('status') status: string,
  ): Promise<IResponse> {
    return this.charactersService.getCharacters(page, status);
  }

  @Get(':id')
  async getCharacterById(@Req() request: Request): Promise<ICharacterDetails> {
    console.log(request.params);
    return await this.charactersService.getCharacterById(Number(request.params.id));
  }
}

function Query(arg0: string): ParameterDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number,
  ) => {};
}

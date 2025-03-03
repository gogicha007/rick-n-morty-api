import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { IResponse, IRespInfo } from 'src/types/interface';

@Controller('characters')
export class CharactersController {
    @Get()
    getAllCharacters(@Req() request: Request): IResponse {
        console.log(request.query);  
        return {info: {} as IRespInfo, results: []};
    }
}

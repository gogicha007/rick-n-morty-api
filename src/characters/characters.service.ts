import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IResponse, ICharacterDetails } from 'src/types/interface';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CharactersService {
  constructor(private readonly httpService: HttpService) {}

  async getCharacters(page: number, status: string): Promise<IResponse> {
    const response = await lastValueFrom(
      this.httpService.get(
        `https://rickandmortyapi.com/api/character?page=${page}&status=${status}`,
      ),
    );

    return response.data;
  }
  
  async getCharacterById(id: number): Promise<ICharacterDetails> {
    const response = await lastValueFrom(
      this.httpService.get(
        `https://rickandmortyapi.com/api/character/${id}`,
      ),
    );

    return response.data;
  }
}
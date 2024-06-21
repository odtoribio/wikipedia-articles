import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Response } from './feed.entity';
import { firstValueFrom } from 'rxjs';
import { FeedDto } from './dto/feed.dto';

@Injectable()
export class FeedService {
  constructor(private httpService: HttpService) {}

  private formatNumber(number: number) {
    return number.toString().padStart(2, '0');
  }

  async getArticles(dto: FeedDto): Promise<Response> {
    const date = new Date(dto.date);
    const day = this.formatNumber(date.getDate() + 1);
    const month = this.formatNumber(date.getMonth() + 1);
    const year = date.getFullYear();

    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getArticlesTranslated(language: string): Promise<any> {
    const url = 'https://libretranslate.com/translate';
    const data = JSON.stringify({
      q: 'Hola mundo',
      source: 'auto',
      target: 'en',
      format: 'text',
      alternatives: 3,
      api_key: '',
    });

    const response = await firstValueFrom(this.httpService.post(url, data));
    return response;
  }
}

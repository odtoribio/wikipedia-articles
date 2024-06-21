import { Body, Controller, Get, Param } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedDto } from './dto/feed.dto';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Get()
  async getArticles(@Body() dto: FeedDto) {
    const response = await this.feedService.getArticles(dto);
    return response?.mostread?.articles || [];
  }

  @Get('translate/:language')
  async getArticlesTranslated(@Param('language') language: string) {
    return await this.feedService.getArticlesTranslated(language);
  }
}

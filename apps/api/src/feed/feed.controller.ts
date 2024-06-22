import { Controller, Get, Param, Query } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedDto } from './dto/feed.dto';
import { ArticleDto } from './dto/article.dto';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Get()
  async getArticles(@Query() query: FeedDto) {
    const response = await this.feedService.getArticles(query);
    return response?.mostread?.articles || [];
  }

  @Get('article')
  async getArticle(@Query() query: ArticleDto) {
    const response = await this.feedService.getArticles(query);
    const articles = response?.mostread?.articles || [];
    const article = articles.find((art) => art.pageid.toString() === query.id);
    return article || {};
  }

  @Get('translate/:language')
  async getArticlesTranslated(@Param('language') language: string) {
    return await this.feedService.getArticlesTranslated(language);
  }
}

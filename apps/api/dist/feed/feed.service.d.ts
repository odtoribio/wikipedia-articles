import { HttpService } from '@nestjs/axios';
import { Response } from './feed.entity';
import { FeedDto } from './dto/feed.dto';
export declare class FeedService {
    private httpService;
    constructor(httpService: HttpService);
    private formatNumber;
    getArticles(query: FeedDto): Promise<Response>;
    getArticlesTranslated(language: string): Promise<any>;
}

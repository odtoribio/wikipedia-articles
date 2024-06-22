import { FeedService } from './feed.service';
import { FeedDto } from './dto/feed.dto';
import { ArticleDto } from './dto/article.dto';
export declare class FeedController {
    private feedService;
    constructor(feedService: FeedService);
    getArticles(query: FeedDto): Promise<import("./feed.entity").Articles[]>;
    getArticle(query: ArticleDto): Promise<{}>;
    getArticlesTranslated(language: string): Promise<any>;
}

import { FeedService } from './feed.service';
import { FeedDto } from './dto/feed.dto';
export declare class FeedController {
    private feedService;
    constructor(feedService: FeedService);
    getArticles(dto: FeedDto): Promise<import("./feed.entity").Articles[]>;
    getArticlesTranslated(language: string): Promise<any>;
}

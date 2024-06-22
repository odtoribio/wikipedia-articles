import { Test, TestingModule } from '@nestjs/testing';
import { FeedService } from '../feed.service';
import { FeedController } from '../feed.controller';
import { FeedDto } from '../dto/feed.dto';

describe('FeedService', () => {
  let service: FeedService;
  let controller: FeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [
        {
          provide: FeedService,
          useValue: {
            getArticles: jest
              .fn()
              .mockResolvedValue({ featuredContent: 'content' }),
          },
        },
      ],
    }).compile();

    service = module.get<FeedService>(FeedService);
    controller = module.get<FeedController>(FeedController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call getFeaturedContent and return empty array', async () => {
    const query: FeedDto = { date: '2024-06-21' };
    const result = await controller.getArticles(query);

    expect(service.getArticles).toHaveBeenCalledWith(query);
    expect(result).toEqual([]);
  });
});

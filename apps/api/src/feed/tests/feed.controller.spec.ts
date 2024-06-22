import { Test, TestingModule } from '@nestjs/testing';
import { FeedController } from '../feed.controller';
import { FeedService } from '../feed.service';
import { FeedDto } from '../dto/feed.dto';

describe('FeedController', () => {
  let controller: FeedController;
  let service: FeedService;

  const query: FeedDto = { date: '2024-06-21' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [
        {
          provide: FeedService,
          useValue: {
            getArticles: jest.fn().mockResolvedValue({
              mostread: {
                articles: [{ pageid: '1', content: 'Test Article' }],
              },
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<FeedController>(FeedController);
    service = module.get<FeedService>(FeedService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return articles on getArticles call', async () => {
    const result = await controller.getArticles(query);

    expect(service.getArticles).toHaveBeenCalledWith(query);
    expect(result).toEqual([{ pageid: '1', content: 'Test Article' }]);
  });

  it('should return empty array if articles not found', async () => {
    (service.getArticles as jest.Mock).mockResolvedValueOnce({
      mostread: { articles: [] },
    });

    const result = await controller.getArticles(query);

    expect(service.getArticles).toHaveBeenCalledWith(query);
    expect(result).toEqual([]);
  });
});

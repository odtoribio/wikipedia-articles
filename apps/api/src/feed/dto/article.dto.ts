import { IsDateString, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class ArticleDto {
  @IsDateString()
  date: string;

  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  id: string;
}

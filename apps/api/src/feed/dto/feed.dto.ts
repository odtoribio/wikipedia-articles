import { IsDateString } from 'class-validator';
export class FeedDto {
  @IsDateString()
  date: string;
}

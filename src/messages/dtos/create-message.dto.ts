import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString({
    message: 'content must be a string',
  })
  content: string;
}

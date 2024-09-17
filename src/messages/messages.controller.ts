import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body);
  }

  @Get()
  async listMessages(@Query() query: any) {
    console.log(query);
    return this.messagesService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Put('/:id')
  async updateMessage(@Param('id') id: string, @Body() body: CreateMessageDto) {
    return this.messagesService.findOneAndUpdate(id, body);
  }

  @Delete('/:id')
  async deleteMessage(@Param('id') id: string) {
    return this.messagesService.deleteOne(id);
  }
}

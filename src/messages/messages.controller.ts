import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Post()
  async createMessage(@Body() body: any) {
    return {
      ...body,
      id: '1',
    };
  }

  @Get()
  async listMessages() {
    return [
      {
        id: '1',
        message: 'Have you eaten?',
      },
      {
        id: '2',
        message: 'Yes, I have eaten',
      },
    ];
  }

  @Get('/:id')
  async GetMessage(@Param('id') id: string) {
    return {
      id,
      message: 'I am a single message',
    };
  }
}

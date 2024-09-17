import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { CreateMessageDto } from './dtos/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async create(data: CreateMessageDto) {
    return this.messagesRepository.create(data.content);
  }

  async findAll() {
    const messages = await this.messagesRepository.findAll();
    return Object.entries(messages).map((item) => item[1]);
  }

  async findOne(id: string) {
    const data = await this.messagesRepository.findOne(id);
    return {
      data,
      success: true,
    };
  }

  async findOneAndUpdate(id: string, data: CreateMessageDto) {
    return this.messagesRepository.findOneAndUpdate(id, data.content);
  }
  async deleteOne(id: string) {
    return this.messagesRepository.deleteOne(id);
  }
}

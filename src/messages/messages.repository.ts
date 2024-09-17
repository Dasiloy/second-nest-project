import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async create(content: string) {
    const contents = await readFile('messages.json', {
      encoding: 'utf-8',
    });
    const messages = JSON.parse(contents);
    const id = (Math.floor(Math.random() * 999) + 1).toString();
    const newMessage = {
      content,
      id,
    };
    messages[id] = newMessage;
    await writeFile('messages.json', JSON.stringify(messages));
    return newMessage;
  }

  async findAll() {
    const contents = await readFile('messages.json', {
      encoding: 'utf-8',
    });
    return JSON.parse(contents);
  }

  async findOne(id: string) {
    const contents = await readFile('messages.json', {
      encoding: 'utf-8',
    });
    const messages = JSON.parse(contents);
    const message = messages[id];
    if (!message) {
      throw new NotFoundException('Message ot found');
    }
    return message;
  }

  async findOneAndUpdate(id: string, content: string) {
    const contents = await readFile('messages.json', {
      encoding: 'utf-8',
    });
    const messages = JSON.parse(contents);
    const message = messages[id];
    if (!message) {
      throw new NotFoundException('Message ot found');
    }
    message.content = content;
    messages[id] = message;
    await writeFile('messages.json', JSON.stringify(messages));
    return message;
  }

  async deleteOne(id: string) {
    const contents = await readFile('messages.json', {
      encoding: 'utf-8',
    });
    const messages = JSON.parse(contents);
    const message = messages[id];
    if (!message) {
      throw new NotFoundException('Message ot found');
    }

    delete messages[id];
    await writeFile('messages.json', JSON.stringify(messages));
    return message;
  }
}

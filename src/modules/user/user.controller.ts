import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { FirestoreService } from 'src/config/firestore/firestore.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly fireStoreService: FirestoreService,
  ) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/firestore')
  findAllFireStore(@Query('colleciton') collection: string) {
    return this.fireStoreService.get(collection);
  }

  @Post()
  create(@Body() dataUser: User) {
    this.userService.create(dataUser);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: any) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}

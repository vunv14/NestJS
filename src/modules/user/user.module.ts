import { firestoreprovide } from './../../config/firestore/firestore.provide';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { FirestoreService } from 'src/config/firestore/firestore.service';
import { FirestoreModule } from 'src/config/firestore/firestore.module';

@Module({
  controllers: [UserController],
  providers: [UserService, FirestoreService],
  imports: [TypeOrmModule.forFeature([User]), FirestoreModule],
})
export class UserModule {}

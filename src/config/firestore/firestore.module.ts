import { Module } from '@nestjs/common';
import { FirestoreService } from './firestore.service';
import { FirestoreController } from './firestore.controller';
import * as admin from 'firebase-admin';
import * as path from 'path';
import * as serviceAccount from 'src/config/firestore/nestjs-32485-firebase-adminsdk-fbsvc-5fda245201.json';
import { firestoreprovide } from './firestore.provide';

@Module({
  providers: [FirestoreService, firestoreprovide],

  exports: [FirestoreService, firestoreprovide],
  controllers: [FirestoreController],
})
export class FirestoreModule {}

import { FirestoreService } from './firestore.service';
import { Body, Controller, Get, Inject, Param, Query } from '@nestjs/common';
@Controller('firestore')
export class FirestoreController {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Get('')
  get(@Query('colleciton') colleciton: any) {
    console.log(colleciton);
    return this.firestoreService.get(colleciton);
  }
}

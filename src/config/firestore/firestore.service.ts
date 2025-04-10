import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Firestore } from 'firebase-admin/firestore';
import { FIRESTORE_TOKEN } from './firestore.provide';

@Injectable()
export class FirestoreService {
  constructor(@Inject(FIRESTORE_TOKEN) private firestore: Firestore) {}

  async addDocument(Collection: string, data: any) {
    const document = await this.firestore.collection(Collection).add(data);
    return document.id;
  }

  async remove(Collection: string, id: string) {
    await this.firestore.collection(Collection).doc(id).delete;
  }

  async uppdate(Collection: string, id: string, data: any) {
    await this.firestore.collection(Collection).doc(id).update(data);
  }

  async get(Collection: string) {
    const dataCollection = await this.firestore.collection(Collection).get();
    return dataCollection;
  }

  async findById(Collection: string, id: string) {
    const data = await this.firestore.collection(Collection).doc(id).get();

    return { id: data.id, ...data.data };
  }

  async getDocument(Collection: string, fildel: string) {
    const data = await this.firestore.collection(Collection).doc(fildel).get();
    return data.data;
  }
}

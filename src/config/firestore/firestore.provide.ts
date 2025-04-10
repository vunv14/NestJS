import { Provider } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from 'src/config/firestore/nestjs-32485-firebase-adminsdk-fbsvc-5fda245201.json';
export const FIRESTORE_TOKEN = 'FIREBASE_ADMIN';
export const firestoreprovide: Provider = {
  provide: FIRESTORE_TOKEN,
  useFactory: async () => {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
      });
    }
    return admin.firestore();
  },
};

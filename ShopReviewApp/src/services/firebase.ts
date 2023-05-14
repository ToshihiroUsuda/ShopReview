import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  DocumentData,
  QueryDocumentSnapshot,
  FirestoreDataConverter,
  Timestamp,
} from 'firebase/firestore';

import { firebaseConfig } from '../../env';
export const app = initializeApp(firebaseConfig);
export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp();

export type Memo = {
  bodyText: string;
  updatedAt: Date;
};

type MemoFireStore = {
  bodyText: string;
  updatedAt: Timestamp;
};

export type MemoCollection = {
  id: string;
} & Memo;

// Convert を実行する関数
export const memoConverter: FirestoreDataConverter<Memo> = {
  toFirestore(memo: Memo): DocumentData {
    return { bodyText: memo.bodyText, updatedAt: memo.updatedAt };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<MemoFireStore>): Memo {
    const data = snapshot.data();
    return { bodyText: data.bodyText, updatedAt: data.updatedAt.toDate() };
  },
};

import { initializeApp, getApp, getApps } from 'firebase/app';
import { DocumentData, QueryDocumentSnapshot, FirestoreDataConverter } from 'firebase/firestore';
import { firebaseConfig } from '../../env';

/* types */
import { User } from '../types/user';

export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Convert を実行する関数
export const userConverter: FirestoreDataConverter<User> = {
  toFirestore(user: User): DocumentData {
    return user;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<User>): User {
    const data = snapshot.data();
    return data;
  },
};

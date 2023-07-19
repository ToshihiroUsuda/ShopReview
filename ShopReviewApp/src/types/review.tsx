import { Timestamp } from 'firebase/firestore';

export type Review = {
  id: string;
  shopId: string;
  userName: string;
  review: string;
  score: 1 | 2 | 3 | 4 | 5;
  createdAt: Timestamp;
  avaterUrl: string;
};

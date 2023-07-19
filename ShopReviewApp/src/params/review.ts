import { Timestamp } from 'firebase/firestore';

import { Review } from '../types/review';

export const testReviews: Review[] = [
  {
    id: 'review0',
    shopId: 'shop0',
    userName: '花子',
    review: '美味しかった',
    score: 4,
    createdAt: Timestamp.now(),
    avaterUrl: '',
  },
  {
    id: 'review1',
    shopId: 'shop0',
    userName: '太郎',
    review: 'ふつう',
    score: 3,
    createdAt: Timestamp.now(),
    avaterUrl: '',
  },
  {
    id: 'review2',
    shopId: 'shop0',
    userName: '二郎',
    review: 'まあまあ',
    score: 2,
    createdAt: Timestamp.now(),
    avaterUrl: '',
  },
  {
    id: 'review3',
    shopId: 'shop0',
    userName: 'けん',
    review: '美味しかった',
    score: 1,
    createdAt: Timestamp.now(),
    avaterUrl: '',
  },
  {
    id: 'review4',
    shopId: 'shop0',
    userName: '小梅',
    review: 'さいこう',
    score: 5,
    createdAt: Timestamp.now(),
    avaterUrl: '',
  },
  {
    id: 'review5',
    shopId: 'shop0',
    userName: 'よしつね',
    review: 'ぼちぼち',
    score: 4,
    createdAt: Timestamp.now(),
    avaterUrl: '',
  },
];

import { atomWithStorage } from 'jotai/utils';

/* types */
import { User, initialUser } from '../types/user';

export const userAtom = atomWithStorage<User>('user', initialUser);

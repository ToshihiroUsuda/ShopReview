import { atomWithStorage } from 'jotai/utils';
import { ThemeMode } from '@rneui/themed';

export const themeModeAtom = atomWithStorage<ThemeMode>('themeMode', 'light');

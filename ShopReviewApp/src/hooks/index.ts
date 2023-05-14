import { useNavigation, NavigationProp } from '@react-navigation/native';

/* types */
import { ScreenPropsList } from '../types/navigation';

export const useScreenNavigation = () => useNavigation<NavigationProp<ScreenPropsList>>();

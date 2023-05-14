import { StackScreenProps } from '@react-navigation/stack';

export type ScreenPropsList = {
  Template: { id: string } | undefined;
};

export type TemplateScreenProps = StackScreenProps<ScreenPropsList, 'Template'>;

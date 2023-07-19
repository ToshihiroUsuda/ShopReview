import { StackScreenProps } from '@react-navigation/stack';

export type ScreenPropsList = {
  Template: { id: string } | undefined;
  ShopList: undefined;
  ShopDetail: { shopId: string };
  ReviewEdit: { shopId: string };
  ReviewDetail: { reviewId: string };
  UserSetting: undefined;
  UserDetail: { userId: string };
};

export type TemplateScreenProps = StackScreenProps<ScreenPropsList, 'Template'>;
export type ShopListScreenProps = StackScreenProps<ScreenPropsList, 'ShopList'>;
export type ShopDetailScreenProps = StackScreenProps<ScreenPropsList, 'ShopDetail'>;
export type ReviewEditScreenProps = StackScreenProps<ScreenPropsList, 'ReviewEdit'>;
export type ReviewDetailScreenProps = StackScreenProps<ScreenPropsList, 'ReviewDetail'>;
export type UserSettingScreenProps = StackScreenProps<ScreenPropsList, 'UserSetting'>;
export type UserDetailScreenProps = StackScreenProps<ScreenPropsList, 'UserDetail'>;

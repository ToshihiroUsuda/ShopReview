# コンセプト
- ショップのレビューを投稿するアプリ

# 画面構成

- App
  - AppNavigator
    - AuthNavigator(StackNavigator)
      - SignUpScreen
      - SignInScreen
    - MainTabNavigator (TabNavigator)
      - HomeStackNavigator (StackNavigator)
        - MainStack (StackNavigator)
          - HomeScreen 
          - ShopScreen
        - CreateReviewScreen (Modal)
      - SearchScreen (Search)
      - UserScreen (User)

# Atom
- user (ログインしているユーザー情報)

# データベースの構成
- users/{userId}
- shops/{shopId}/reviews/{reviewId}

# 使い方
- firebase apiKeyの情報を env.tsに記載
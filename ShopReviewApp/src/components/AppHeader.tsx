import React from 'react';
import { Header } from '@rneui/themed';

const AppHeader: React.FC = () => {
  return (
    <Header
      centerComponent={{
        text: 'Memo App',
        style: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
      }}
      containerStyle={{
        width: '100%',
        height: 104,
        alignItems: 'flex-end',
        position: 'absolute',
      }}
    />
  );
};

export default AppHeader;

// ProgressBar.js
import { selectUser } from '@store/selectors/userSelects';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const {setState} = useSelector(selectUser);

  return (
    <View style={{ width: '90%', backgroundColor: 'silver', height: 20 }}>
     <Text>Progress: {setState}</Text>
    </View>
  );
};

export default ProgressBar;

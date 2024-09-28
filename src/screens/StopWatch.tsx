import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button, { ButtonShape, ButtonType } from '@components/Button';

import Layout, { SCREEN_WIDTH } from '@constants/Layout';
export default function StopWatch(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>StopWatch</Text>
      <View style={{ height: 56 }} />
      <View style={{ ...Layout.flexRow.alignCenter, paddingHorizontal: 20 }}>
        <Button
          title="Start"
          type={ButtonType.Default}
          shape={ButtonShape.Default}
          style={{ flex: 1 }}
          onPress={() => {
            console.log('Start');
          }}
        />
        {/* <Button
          title="Stop"
          type={ButtonType.Default}
          shape={ButtonShape.Default}
          style={{ flex: 1 }}
          onPress={() => {
            console.log('Start');
          }}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Layout.flexCol.center,
    flex: 1,
  },
});

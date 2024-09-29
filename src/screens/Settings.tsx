import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Config from 'react-native-config';

import Layout from '@constants/Layout';

export default function Settings(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Text>{Config.HOSTNAME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Layout.flexCol.center,
    flex: 1,
  },
});

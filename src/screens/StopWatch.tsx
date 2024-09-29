import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DateTime } from 'luxon';

import Button, { ButtonShape, ButtonType } from '@components/Button';

import Layout from '@constants/Layout';
import Typo from '@constants/Typo';
import Themes from '@constants/Themes';

export default function StopWatch(): JSX.Element {
  const [time, setTime] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);
  const [lapList, setLapList] = React.useState<number[]>([]);

  const timerInterval = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    if (isStart) {
      timerInterval.current = setInterval(() => {
        setTime(prev => prev + 16.3);
      }, 10);
    } else {
      clearInterval(timerInterval.current);
    }
    return () => clearInterval(timerInterval.current);
  }, [isStart]);

  const handleStart = () => {
    setIsStart(true);
  };

  const handleStop = () => {
    setIsStart(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  const handleLap = () => {
    if (time > 0) {
      setLapList(prev => [...prev, time]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={Layout.flexRow.alignStart}>
        <Text style={styles.time} adjustsFontSizeToFit>
          {DateTime.now()
            .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
            .plus(time)
            .toFormat('HH:mm:ss,uu')}
        </Text>
      </View>
      <View style={{ height: 56 }} />
      <View style={{ ...Layout.flexRow.alignCenter, paddingHorizontal: 20 }}>
        {isStart && time > 0 ? (
          <Button
            title="Lap"
            type={ButtonType.Outline}
            shape={ButtonShape.Default}
            style={{ flex: 1 }}
            onPress={handleLap}
          />
        ) : (
          <Button
            title="Reset"
            type={ButtonType.Outline}
            shape={ButtonShape.Default}
            style={{ flex: 1 }}
            onPress={handleReset}
          />
        )}
        <View style={{ width: 12 }} />
        {!isStart ? (
          <Button
            title="Start"
            type={ButtonType.Default}
            shape={ButtonShape.Default}
            style={{ flex: 1 }}
            onPress={handleStart}
          />
        ) : (
          <Button
            title="Stop"
            type={ButtonType.Default}
            shape={ButtonShape.Default}
            style={{ flex: 1 }}
            onPress={handleStop}
          />
        )}
      </View>
      {/* TODO: Implement Lap list */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Layout.flexCol.center,
    flex: 1,
  },
  time: {
    ...Typo.heading1,
    fontWeight: '500',
    color: Themes.slate900,
  },
});

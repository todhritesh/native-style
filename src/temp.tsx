import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function LongPressPopover() {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const longPressHandler = useRef(null);

  const handleLongPress = useAnimatedGestureHandler({
    onStart: () => {
      setPopoverVisible(true);
    },
    onEnd: () => {
      setPopoverVisible(false);
    },
  });

  console.log(popoverVisible)

  const popoverStyle = useAnimatedStyle(() => ({
    opacity: withTiming(popoverVisible ? 1 : 0),
    transform: [{ scale: withTiming(popoverVisible ? 1 : 0) }],
  }));

  return (
    <View style={styles.container}>
      <LongPressGestureHandler
        ref={longPressHandler}
        onHandlerStateChange={handleLongPress}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Press and hold me</Text>
        </TouchableOpacity>
      </LongPressGestureHandler>
      <Animated.View style={[styles.popover, popoverStyle]}>
        <Text style={styles.popoverText}>Popover content</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  popover: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
  },
  popoverText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

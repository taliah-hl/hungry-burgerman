import React, { useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

const AnimatedPositionScreen = () => {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const moveObject = () => {
    Animated.timing(position, {
      toValue: { x: 100, y: 200 },
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={moveObject}>
        <Animated.View style={[styles.object, { transform: position.getTranslateTransform() }]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  object: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default AnimatedPositionScreen;
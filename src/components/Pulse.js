import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export class Pulse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pulses: [
        {
          id: 1,
          scale: new Animated.Value(0),
          opacity: new Animated.Value(1),
        },
        {
          id: 2,
          scale: new Animated.Value(0),
          opacity: new Animated.Value(1),
        },
      ],
    };
  }
  componentDidMount() {
    const {
      pulses,
    } = this.state;

    const timings = [];
    pulses.map((item) => {
      timings.push({
        scale: Animated.timing(item.scale, {
          toValue: 1,
          duration: 2000,
        }),
        opacity: Animated.timing(item.opacity, {
          toValue: 0,
          duration: 2000,
        }),
      });
      return false;
    });

    Animated.stagger(
      1000,
      timings.map(item => Animated.loop(Animated.parallel([
        item.scale,
        item.opacity,
      ]))),
    ).start();
  }
  render() {
    const {
      pulses,
    } = this.state;

    return (
      <View style={styles.container}>
        {
          pulses.map(item => (
            <Animated.View
              key={item.id}
              style={{
                position: 'absolute',
                alignSelf: 'center',
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'rgba(153, 0, 0, 0.4)',
                opacity: item.opacity,
                transform: [
                  {
                    scale: item.scale,
                  },
                ],
              }}
            />
          ))
        }
      </View>
    );
  }
}

export default Pulse;

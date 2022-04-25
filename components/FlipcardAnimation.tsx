import { Animated } from "react-native";

const FlipcardAnimation = () => {
    let animatedValue = new Animated.Value(0);
    let currentValue = 0;
  
    animatedValue.addListener(({ value }) => {
        currentValue = value;
    });
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    }
  };

  export default FlipcardAnimation;
  
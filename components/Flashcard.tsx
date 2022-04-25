import { Animated, TouchableOpacity, View, Text } from "react-native";

import styles from "../styles";
import FlipcardAnimation from "../components/FlipcardAnimation"


interface Props {
  frontside: any;
  backside: any;
  frontTransform: any;
  backTransform: any;
}

const Flashcard: React.FC<Props> = ( { frontside, backside, frontTransform, backTransform }) => {
  <TouchableOpacity style={styles.center} onPress={FlipcardAnimation}>
    <View>
      <Animated.View
        style={[
          styles.flashcardStyle,
          { transform: {frontTransform} },
        ]}>
        <Text style={styles.textStyle}>{frontside}</Text>
      </Animated.View>

      <Animated.View
        style={[
          styles.flashcardStyle,
          styles.flashcardBacksideStyle,
          { transform: {backTransform} },
        ]}>
          <Text style={styles.textStyle}>{backside}</Text>
      </Animated.View>
    </View>
  </TouchableOpacity>

};



export default Flashcard;
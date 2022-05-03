import { Text, View } from "react-native";

import styles from "../styles";

interface Props {
  text_row1: string;
  text_row2?: string;
}

const TextParagraph = ({ text_row1, text_row2 } : Props) => {
  return (
    <View style={styles.blueContainer}>
      <Text style={styles.textStyle}>
        {" "}
        {text_row1} {"\n"} {text_row2}
      </Text>
    </View>
  );
};

export default TextParagraph;

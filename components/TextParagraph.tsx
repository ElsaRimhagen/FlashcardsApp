import { Text, View } from "react-native";

import styles from "../styles";

interface Props {
  text_row1: string;
  text_row2?: string;
}

const TextParagraph: React.FC<Props> = ({ text_row1, text_row2 }) => {
  return (
    <View style={styles.blueContainer}>
      <Text style={styles.textStyle}>
        {" "}
        {text_row1} {"\n"} {text_row2}{" "}
      </Text>
    </View>
  );
};

export default TextParagraph;

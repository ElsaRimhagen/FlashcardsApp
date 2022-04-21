import { Image, TouchableOpacity } from "react-native";
import styles from "../styles";

interface Props {
  source: any;
  onPress?: () => void;
}

const ClickableBlock: React.FC<Props> = ({ source, onPress }) => {
    return(
        <TouchableOpacity 
            style={styles.center}
            onPress={onPress} >
        <Image
            style={styles.blockStyle}
            source={source} />
      </TouchableOpacity>
  );
};

export default ClickableBlock;

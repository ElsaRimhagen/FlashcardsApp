import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

interface Props {
  source: any;
  category: string;
  onPress?: () => void;
}

const CategoryLogo: React.FC<Props> = ({source, category, onPress}) => {
    return(
      <View style={styles.box}>
          <View style={styles.innerbox}>
            <TouchableOpacity
              style={styles.logoStyle}
              onPress={onPress} >
              <Image
                style={styles.imgStyle}
                source={source} />
              <Text style={styles.textStyle}> {category} </Text>
            </TouchableOpacity>
          </View>
        </View>
  );
};

export default CategoryLogo;

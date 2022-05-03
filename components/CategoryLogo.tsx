import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "../styles";

interface Props {
  source: any;
  category: string;
  onPress?: () => void;
}

const CategoryLogo = ({ source, category, onPress }: Props) => {
  return (
    <View style={styles.box}>
      <View style={styles.innerbox}>
        <TouchableOpacity style={styles.center} onPress={onPress}>
          <Image style={styles.imgStyle} source={source} />
          <Text style={styles.categorytextStyle}> {category} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryLogo;

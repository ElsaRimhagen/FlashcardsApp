import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

interface Props {
  source: any;
  category: string;
  onPress?: () => void;
}

<<<<<<< HEAD
const CategoryLogo: React.FC<Props> = ({source, category, onPress}) => {
    return(
      <View style={styles.box}>
          <View style={styles.inner}>
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
=======
const CategoryLogo: React.FC<Props> = ({ source, category, onPress }) => {
  return (
    <View style={styles.box}>
      <View style={styles.inner}>
        <TouchableOpacity style={styles.logoStyle} onPress={onPress}>
          <Image style={styles.imgStyle} source={source} />
>>>>>>> 498b8b9537ff4a1392158761d47a25a686f91020

          <Text style={styles.textStyle}> {category} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryLogo;

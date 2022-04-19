import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

interface Props {
    source: any;
    category: string;
    navigation?: string;
}

const CategoryLogo: React.FC<Props> = ( props , {navigation}: {navigation: any} ) => {
    return(
      <View style={styles.box}>
          <View style={styles.inner}>
            <TouchableOpacity
              style={styles.logoStyle}
              onPress={() => navigation.navigate(props.navigation)}
            >
              <Image
                style={styles.imgStyle}
                source={props.source}
              />
              <Text style={styles.textStyle}> {props.category} </Text>
            </TouchableOpacity>
          </View>
        </View>

    )};

    export default CategoryLogo;
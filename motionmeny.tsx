import { StyleSheet, Text, View , SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

const MotionMeny = () => {

  const clickHandler = () => {
    alert('Yay! Knappen funkar :)')
  }
  const Header = () => {
    return(
      <View  style = {styles.header}>
        <Text style = {styles.titleStyle}>
          Rörelse
        </Text>
      </View>
    )
  }
  const ScrollContainer = () =>{
    return(
      <View style = {styles.boxContainer}>
        <ScrollView>
          <TouchableOpacity  style = {styles.clickStyle}>
          <Image
            source={require('./assets/move_10steps.png')}
            style = {styles.imgStyle}
          />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.clickStyle}>
          <Image
            source={require('./assets/turn_right_15deg.png')}
            style = {styles.imgStyle}
          />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.clickStyle}>
          <Image
            source={require('./assets/turn_left_15deg.png')}
            style = {styles.imgStyle}
          />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
  const GoingBack = () =>{
    return(
        <TouchableOpacity 
          style = {styles.touchableOpacity}
          onPress = {clickHandler}
          >
          <Image
          style = {styles.floatingButton}
          source = {require('./assets/pil.png')} />
        </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style = {styles.container}>
    <Header/>
    <ScrollContainer/>  
    <GoingBack/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#4C97FF',
    alignItems:'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#F8A839',
    fontFamily: 'American Typewriter',
    fontSize: 80, 
    padding: 30,
    
  },
  boxContainer: {
    width: '80%',
    height:'85%',
    backgroundColor: '#4C97FF',
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    alignItems:'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 250,
    height: 75,
    resizeMode: 'contain',
    padding: 10,
    margin: 5
  },
  
  clickStyle: {
    alignItems:'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    position: 'absolute',
    width: 80,
    height: 80, 
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
    bottom: 30
  },
  floatingButton: {
    resizeMode: 'contain',
    width: 80,
    height: 80
  }
});

export default MotionMeny
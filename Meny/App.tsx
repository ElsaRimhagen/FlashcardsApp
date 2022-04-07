import React from "react";
import {Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";

const Meny = () => {

  const Header = () => {
    return(
      <View  style = {styles.header}>
        <Text style = {styles.titleStyle}>
          Meny
        </Text>
      </View>
    )
  }

  const Boxes = () => {
    return(
      <View style = {styles.boxContainer}>
        <View style = {styles.box}>
          <View style = {styles.inner}>
            <TouchableOpacity style = {styles.logoStyle}>
              <Image style = {styles.imgStyle}
              source = {require('./assets/motion.png')}
              />
              <Text style= {styles.textStyle}>
              Rörelse
            </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.box}>
          <View style = {styles.inner}>
              <TouchableOpacity style = {styles.logoStyle}>
                <Image style = {styles.imgStyle}
                source = {require('./assets/looks.png')}
                />
                <Text style= {styles.textStyle}>
                  Utseende
                </Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.box}>
          <View style = {styles.inner}>
          <TouchableOpacity style = {styles.logoStyle}>
              <Image style = {styles.imgStyle}
              source = {require('./assets/sound.png')}
              />
              <Text style= {styles.textStyle}>
                  Ljud
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.box}>
          <View style = {styles.inner}>
          <TouchableOpacity style = {styles.logoStyle}>
              <Image style = {styles.imgStyle}
              source = {require('./assets/events.png')}
              />
              <Text style= {styles.textStyle}>
                Händelser
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.box}>
          <View style = {styles.inner}>
          <TouchableOpacity style = {styles.logoStyle}>
              <Image style = {styles.imgStyle}
              source = {require('./assets/controll.png')}
              />
              <Text style= {styles.textStyle}>
                Kontroll
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style = {styles.box}>
          <View style = {styles.inner}>
          <TouchableOpacity style = {styles.logoStyle}>
              <Image style = {styles.imgStyle}
              source = {require('./assets/feel.png')}
              />
              <Text style= {styles.textStyle}>
                Känna av
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.box}>
          <View style = {styles.inner}>
          <TouchableOpacity style = {styles.logoStyle}>
              <Image style = {styles.imgStyle}
              source = {require('./assets/operations.png')}
              />
              <Text style= {styles.textStyle}>
                Operatorer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.box}>
          <View style = {styles.inner}>
          <TouchableOpacity style = {styles.logoStyle}>
              <Image style = {styles.imgStyle}
              source = {require('./assets/variables.png')}
              />
              <Text style= {styles.textStyle}>
                Variabler
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    )
  }

  return (
    <SafeAreaView style = {styles.contatiner}>
     <Header/>
     <Boxes/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    backgroundColor: '#4C97FF',
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
    padding: 30
  },
  textStyle: {
    color: '#F8A839',
    fontFamily: 'American Typewriter',
    fontSize: 30,
    padding: 10 
  },
  boxContainer: {
    width: '100%',
    height:'85%',
    backgroundColor: '#4C97FF',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '25%',
    padding: 5,
    backgroundColor: '#4C97FF',
  },
  inner: {
    flex: 1,
    backgroundColor: '#4C97FF',
    alignItems: 'center',
    justifyContent: 'center', 
    
  }, 
  imgStyle: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
  },
  logoStyle: {
    alignItems: 'center',
    justifyContent: 'center', 
    
  }

});

export default Meny;
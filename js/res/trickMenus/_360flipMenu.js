import React, { useState, useEffect } from 'react'
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { 
  AppRegistry,
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  ScrollView,
  Switch
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';
//
//
const _360flipMenu = (props) => {

  const dispatch = useDispatch()
  const stance = useSelector((state) => state.stance)
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
      if(stance === props.naturalStance) {
        setIsEnabled(false)
      } 
      if(stance !== props.naturalStance) {
        setIsEnabled(true)
      }
  })

  const toggleSwitch = () => { 
    setIsEnabled(prevState => !prevState) 
    if(stance == "goofy") {
      dispatch({
        type: "SET_STANCE",
        stance: "regular",
      })
    }
    else if(stance == "regular") {
      dispatch({
        type: "SET_STANCE",
        stance: "goofy",
      })
    }
  };

  const _display360FLIP_MENU = () => {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 1990}}>
                <TouchableOpacity 
                style={localStyles.buttonBox}
                activeOpacity={.5} 
                onPress={() => props._back_toMainTrickMenu()}
                >
                <Image 
                style={localStyles.topMenu}
                source={require('../archive/icon_left_w.png')}        
                />
                </TouchableOpacity>

              <View style={localStyles.textFlex}>
                <Text style={localStyles.titleText}>
               360 flips 
                </Text>

                <Text style={localStyles.descriptiveText}>
                  It has many names... 360 flip, 3flip, tre flip, tre-bomb... but one thing is for certain: 
                  it is one of the most beautiful tricks in all of skateboarding.  {"\n\n"}The fact that you're even here attempting it
                  means something and I would like to congratulate you for how far you have come. {"\n\n"}
                  What is it? {"\n\n"}
                  The 360 flip is a 360 degree shuv-it plus a kickflip{"\n\n"}
                  FOOT POSITION:{"\n\n"}
                  Back foot is REALLY in the curve, almost as if on the other side of the board {"\n\n"}
                  Front foot is closer in the direction of your tail, cocked inwards like a kickflip{"\n\n"}
                1. Pop. {"\n\n"}
                  Back foot snaps down and scoops backward/in... the feeling is so specific that you just have to go
                  do it millions of times in order to get it down pat. But when the scoop is right it feels very springy 
                  and effortless.{"\n\n"}
                2. Front foot {"\n\n"}
                  What front foot? No seriously, it barely feels like anything. Alot of the energy to get the board to flick in the 
                  direction of the kickflip comes through from the back flick. Your front foot lightly and quickly flicks as if doing a
                  kickflip.{"\n\n"}
                3.Mid-air/Landing {"\n\n"}
                  Back foot comes up mid air just like any other trick, this will seem impossible as you just flicked it behind you 
                  as hard as you possibly can, but yes pick that back foot up.{"\n\n"}
                  Click below to see the 360 flip in augmented reality!

                </Text>

              </View>

              <TouchableHighlight 
              style={isEnabled ? localStyles.Obuttons : localStyles.Bbuttons}
              onPress={() => props._begin_TrickScene("_360FLIP_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              360 flip
              </Text>
              </TouchableHighlight>

              <View style={localStyles.switchBox}> 
                <Text style={localStyles.descriptiveText}>Toggle the switch below to see the trick performed in switch! (the opposite of your stance) {stance} </Text>
                <Switch 
                  style={localStyles.switchStyle}
                  trackColor={{ false: 'hsla(205, 83%, 16%, 0.67)', true: 'hsla(30, 91%, 50%, .9)' }}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSwitch}
                  value={isEnabled} 
                />
              </View>

          </View>
        </ScrollView>

      )
    }
      return  _display360FLIP_MENU();

  }
  
  const localStyles = StyleSheet.create({
    flex : {
      flex : 1,
    },
    scrollFlex : {
      flex : 1,
      backgroundColor: "black",
    },
    viroContainer : {
      flex : 1,
      backgroundColor: "black",
    },
    outer : {
      flex : 1,
      flexDirection: 'row',
      alignItems:'center',
    },
    inner: {
      flex : 1,
      flexDirection: 'column',
      alignItems:'center',
    },
    textFlex : {
      flex : 1,
      justifyContent: 'center',
      marginBottom: 0
    },
    titleText: {
      paddingTop: 10,
      paddingBottom: 20,
      fontFamily: 'Futura',
      color:'#fff',
      textAlign:'center',
      fontSize : 32
    },
    descriptiveText: {
      fontFamily: 'Futura',
      flexWrap: 'wrap',
      width: '90%',
      margin: 10,
      color:'#fff',
      textAlign:'justify',
      fontSize : 16
    },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 20
    },
    Bbuttons : {
      height: 80,
      width: 250,
      paddingTop: 20,
      paddingBottom: 20,
      alignSelf: 'center',
      marginBottom: 15,
      backgroundColor: 'hsla(205, 83%, 16%, 0.67)', 
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    Obuttons : {
      height: 80,
      width: 250,
      paddingTop: 20,
      paddingBottom: 20,
      alignSelf: 'center',
      marginBottom: 15,
      backgroundColor: 'hsla(30, 91%, 50%, .9)', 
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    exitButton : {
      height: 50,
      width: 100,
      paddingTop:10,
      paddingBottom:100,
      marginTop: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    topMenu: {
      height : '30%',
      width : '40%',
      top : 0,
    },
    buttonBox: {
      height : '5%',
      width : '40%',
      marginTop: 30,
      marginBottom: 10,
    },
    switchBox: {
      marginBottom: 25,
    },
    switchStyle: {
      alignSelf: 'center',
      transform: [{ scaleX: 1.6 }, { scaleY: 1.4 }]
    },
  });
module.exports = _360flipMenu;


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
const VarialheelflipMenu = (props) =>{
    
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


  const _displayVARIALHEELFLIP_MENU = () => {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 1750}}>
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
               Varial heelflips 
                </Text>

                <Text style={localStyles.descriptiveText}>
                {"\n\n"}
                What is it? {"\n\n"}
                A kickflip plus a backside Pop Shuv-it
                {"\n\n"}PRE-REQUISITES:{"\n\n"} An Ollie. A frontside pop shuv
                it, a heelflip.
                {"\n\n"}
                FOOT POSITION:{"\n\n"}
                Back foot is the same as the frontside Pop Shuv-it. on the part of the curve closest to you, toes hangin off{"\n\n"}
                Front foot is in standard heelflip spot {"\n\n"}
                1. Pop. {"\n\n"}
                Back foot is the same as a frontside Pop shuv it, on the part of the curve closest to you{"\n\n"}
                2. Flick{"\n\n"}
                front foot is the same as the heelflip. The trick is doing them both at the same time and finding the perfect angle/compromise between the two...(think more heelflip) 
                3.Landing {"\n\n"}
                You have to commit and trust that the board will be there when you go to land! This confidence will only grow with time but in the meantime 
                get ready to land 'primo' once or twice before you get the hang of it.{"\n\n"}
                Click below to see the kickflip in augmented reality!
                </Text>
                  <Text style={localStyles.brightText}> (drag the board around to resize as you like, and then release to see the trick) {"\n\n"} </Text>

              </View>

              <TouchableHighlight 
              style={isEnabled ? localStyles.Obuttons : localStyles.Bbuttons}
              onPress={() => props._begin_TrickScene("VARIALHEELFLIP_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              varial heelflip
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
        return _displayVARIALHEELFLIP_MENU();
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
      height : '23%',
      width : '40%',
      top : 0,
    },
    buttonBox: {
      height : '7.6%',
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
    brightText: {
      fontFamily: 'Futura',
      flexWrap: 'wrap',
      width: '90%',
      margin: 10,
      color:'hsla(30, 91%, 50%, .9)',
      textAlign:'justify',
      fontSize : 16
    }
  });

module.exports = VarialheelflipMenu;

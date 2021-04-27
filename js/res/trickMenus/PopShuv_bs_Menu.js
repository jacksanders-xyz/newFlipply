import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

const PopShuv_bs_Menu = (props) => {

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

  const _displayPOPSHUV_BS_MENU = () => {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
        <View style={{height: 2600}}>
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
        Backside Pop Shuv-its 
        </Text>

          <Text style={localStyles.descriptiveText}> A beautiful milestone...
          {"\n\n"} You've conquered the ollie, perhaps you can even do it
          while moving. But now you're ready for your first flip trick. 
          {"\n\n"}PRE-REQUISITES:
          An Ollie... even better if you can do one while moving. Perhaps even a backside 180.
          {"\n\n"}
          STEPS: 
          {"\n\n"} Foot position: 
          front foot is right before the bolts, maybe turned a little bit towards the nose. 
          back foot is about where it was for the Ollie, except nudged forward a bit so that your toes are hanging off a bit.
          {"\n"}
          STEPS:{"\n\n"}
          1. Pop with flick {"\n\n"}  
          Where things start to get different from the Ollie is the role of
          your back foot... Your back foot is going to pops down you are also
          going to flick it behind you. This will generate the movement which
          spins the board horizontally.
          {"\n\n"}
          2.Front foot movement {"\n\n"} Just as you back foot has gained
          a new role, so has your front foot: As you drag it upwards (just
            as you would in an Ollie) you will also keep it more flat. When
          doing Just an Ollie, you have the option to "steeze it out" by
          really rolling your front ankle up the board as it goes out. With
          the Pop Shuv, the front foot needs to be a bit flatter, as it will
          act as a horizontal point of rotation. Think of it as fulcrum, which
          your board will rotate around. This is very Important as It will
          control the rotation AND allow you to catch the board with your
          front foot as it comes around. 
          {"\n\n"}
          3.Level Out {"\n\n"} 

          Leveling out in this case means less "going forward with your front
          foot" and more picking up your back foot to meet the same level as
          your front. Don't get me wrong, your front goes forward to level out
          a bit... But you won't feel it as much. Remember, whatever flip
          trick your doing, the Ollie is always there and you need keep in
          mind the ollie fundamentals. It's spooky the amount of tricks where
          if you just think "Ollie first", you will do them. 
          {"\n\n"}
          4. Catch that board and land {"\n\n"} Click below to take a peek!
          </Text>
            <Text style={localStyles.brightText}> (drag the board around to resize as you like, and then release to see the trick) {"\n\n"} </Text>
        </View>

          <TouchableHighlight 
            style={isEnabled ? localStyles.Obuttons : localStyles.Bbuttons}
            onPress={() => props._begin_TrickScene("POPSHUV_BS_SCENE")}
            underlayColor={'#68a0ff'} 
          >
            <Text style={localStyles.buttonText}> backside Pop Shuv-it </Text>
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

        return _displayPOPSHUV_BS_MENU();
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
      marginRight: 7,
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
      height : '50%',
      width : '40%',
      top : 0,
    },
    buttonBox: {
      height : 51, 
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
// { isEnabled ? 'hsla(30, 91%, 50%, .9)' : 'hsla(205, 83%, 16%, 0.67)'},

module.exports = PopShuv_bs_Menu;

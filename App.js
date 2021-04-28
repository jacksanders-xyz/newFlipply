import React, { Component } from 'react';
// redux stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector, connect } from 'react-redux';
import reducer from './redux/reducers';
// react native stuff
import { 
  AsyncStorage,
  AppRegistry,
  Text,
  Image,
  View,
  StatusBar,
  StyleSheet,
  ImageBackground,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  YellowBox
} from 'react-native';

// VIRO STUFF:
import {
  ViroARSceneNavigator,
} from 'react-viro';

//for now, please no warnings
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);

// MenuComponents: 
import UserSignInMenu from './js/res/UserMenus/UserSignInMenu';
import UserSignUpMenu from './js/res/UserMenus/UserSignUpMenu';

//TrickMenuComponents:
import OllieMenu from './js/res/trickMenus/OllieMenu';
import PopShuv_bs_Menu from './js/res/trickMenus/PopShuv_bs_Menu';
import PopShuv_fs_Menu from './js/res/trickMenus/PopShuv_fs_Menu.js';
import KickflipMenu from './js/res/trickMenus/KickflipMenu';
import HeelflipMenu from './js/res/trickMenus/heelflipMenu';
import VarialflipMenu from './js/res/trickMenus/varialflipMenu.js';
import VarialheelflipMenu from './js/res/trickMenus/varial_heelflipMenu.js';
import HardflipMenu from './js/res/trickMenus/hardflipMenu.js';
import _3Shuv_bs_Menu from './js/res/trickMenus/_3Shuv_bs_Menu.js';
import _360flipMenu from './js/res/trickMenus/_360flipMenu';
import _3Shuv_fs_Menu from './js/res/trickMenus/_3Shuv_fs_Menu.js';
import LaserflipMenu from './js/res/trickMenus/laserflipMenu';
 
// Urls
const baseUrl = 'http://192.168.0.26:8000/'
const usersUrl = `${baseUrl}users/` 
const loginUrl = `${baseUrl}login/` 
const profileUrl = `${baseUrl}profile/` 
// IMAGE URI's
const boardImage = {uri: "https://pngimg.com/uploads/skateboard/skateboard_PNG11709.png"}
const Image2 = {uri: "https://www.nikesb.com/assets/imager/uploads/7035/nikesb-fpar-keyakiIke_NollieHalfCabFlip_bd624c85e984eb4b3e5bbc5eb4b33f00.jpg"}
// Menu/navigator state
const mainUserHomepage = "mainUserHomepage";
const signInMenu = "signInMenu";
const signUpMenu = "signUpMenu";
const trickMenu = "trickMenu";
const trick_menu_nav = "A Tricks Menu Is on"  
const trick_scene_nav = "A Trick Scene Is happening"  
const defaultNavigatorType = mainUserHomepage
// Trick menu Navigator State
const OLLIE_MENU = "OLLIE_MENU";
const POPSHUV_BS_MENU = "POPSHUV_BS_MENU";
const POPSHUV_FS_MENU = "POPSHUV_FS_MENU";
const KICKFLIP_MENU = "KICKFLIP_MENU";
const HEELFLIP_MENU = "HEELFLIP_MENU";
const VARIALFLIP_MENU = "VARIALFLIP_MENU";
const VARIALHEELFLIP_MENU = "VARIALHEELFLIP_MENU";
const HARDFLIP_MENU = "HARDFLIP_MENU";
const _3SHUV_BS_MENU = "_3SHUV_BS_MENU";
const _360FLIP_MENU = "_360FLIP_MENU";
const _3SHUV_FS_MENU = "_3SHUV_FS_MENU";
const LASERFLIP_MENU = "LASERFLIP_MENU";
const defaultTrickMenu = ''
//Trick Scene state starts as an empty string

const defaultTrickScene = ''

class ViroSample extends Component {
  constructor() {
    super();
    this.store = createStore(reducer) 
    this.state = {
      topNavigatorType : defaultNavigatorType,
      lastClickedTrickMenu : defaultTrickMenu,
      lastClickedTrickScene : defaultTrickScene,
      user: '',
      stance: '',
      error: ''
    }
         this._LandingPage = this._LandingPage.bind(this);
         this._begin_UserSignIn_MENU = this._begin_UserSignIn_MENU.bind(this);
         this._init_UserSignIn_MENU = this._init_UserSignIn_MENU.bind(this);
         this._begin_UserSignUp_MENU = this._begin_UserSignUp_MENU.bind(this);
         this._init_UserSignUp_MENU = this._init_UserSignUp_MENU.bind(this);
         this._userSignedIn = this._userSignedIn.bind(this);
         this._loadUserProfile = this._loadUserProfile.bind(this);
         this._greetingRandomizer = this._greetingRandomizer.bind(this);
         this._trickMenuSelector = this._trickMenuSelector.bind(this);
         this._begin_TrickMenu = this._begin_TrickMenu.bind(this);
         this._init_TrickMenu = this._init_TrickMenu.bind(this);
         this._begin_TrickScene = this._begin_TrickScene.bind(this);
         this._init_TrickScene = this._init_TrickScene.bind(this);
         this._back_toTricksMenu = this._back_toTricksMenu.bind(this);
         this._backARROW_scene = this._backARROW_scene.bind(this);
         this._back_toMainTrickMenu = this._back_toMainTrickMenu.bind(this);
  }
  render() {
    switch(this.state.topNavigatorType) {
      case mainUserHomepage:
        return this._LandingPage();
      case signInMenu:
        return this._init_UserSignIn_MENU();
      case signUpMenu:
        return this._init_UserSignUp_MENU();
      case trickMenu:
        return this._trickMenuSelector();
      case trick_menu_nav:
        return this._init_TrickMenu(this.state.lastClickedTrickMenu);
      case trick_scene_nav:
        return this._init_TrickScene(this.state.lastClickedTrickScene);
    }
}
  
  _LandingPage() {
    return (
      <ImageBackground source={require('./js/res/photos/kickflip.jpg')} style={localStyles.backImage} imageStyle={{ opacity: 0.7 }}>
          <Text style={localStyles.flipplyText}>
          flipply.
          </Text>

          <TouchableHighlight style={localStyles.slimButtons}
          onPress={this._begin_UserSignIn_MENU()}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.slimButtonText}>
          sign in 
          </Text>
          </TouchableHighlight>
          
          <TouchableHighlight style={localStyles.slimButtons}
          onPress={this._begin_UserSignUp_MENU()}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.slimButtonText}>
          sign up
          </Text>
          </TouchableHighlight>
       </ImageBackground> 
    );
  }

  _begin_UserSignIn_MENU() {
      return () => { 
        this.setState({
        topNavigatorType: signInMenu 
      })
    }
  }

  _init_UserSignIn_MENU() {
    return (
        <UserSignInMenu user={this.state.user} error={this.state.error} loginUrl={loginUrl} _userSignedIn={this._userSignedIn} _back_toMainMenu={() => this.setState({ topNavigatorType: defaultNavigatorType}) } />
    ) 
  }

  _begin_UserSignUp_MENU() {
      return () => { 
        this.setState({
        topNavigatorType: signUpMenu 
      })
    }
  }

   _userSignedIn = async (response, username, password) => {
      try {
        const accessToken = response.access;
        const refreshToken = response.refresh;
        await AsyncStorage.setItem("accessToken", accessToken);
        await AsyncStorage.setItem("refreshToken", refreshToken);
        this._loadUserProfile(username, password, accessToken);
      }
       catch(err) {
         console.log("there was a problem:", err);
      }
  }

   _loadUserProfile = (username, password, accessToken) => {
        const myHeaders = new Headers({
          'Content-Type': "application/json",
          'Accept': "*/*",
          'Authorization': 'Bearer ' + accessToken
        })
        fetch(profileUrl, {
            method: "GET",
            headers: myHeaders,
         }).then(response => {
            if(!response.ok) { 
              throw new Error 
            }
            else { 
              return response.json() 
            }
         }).then(response => {
              const USERNAME = response.username
              const STANCE = response.stance
              this.store.dispatch({
                type: "SET_STANCE",
                stance: STANCE
              })
              this.setState({ 
               topNavigatorType: trickMenu,
               user: USERNAME,
               stance: STANCE
             })
         })
         .catch(err => console.log("HEY HERE IS THE ERROR ==>", err))
     } 

  _init_UserSignUp_MENU() {
    return (
        <UserSignUpMenu signUp_USER_={this.signUp_USER_} usersUrl={usersUrl} loginUrl={loginUrl} _userSignedIn={this._userSignedIn} _back_toMainMenu={() => this.setState({ topNavigatorType: defaultNavigatorType}) }/>
    ) 
  }

  _greetingRandomizer() {
    const greetings = {
      0: "whats up, " + this.state.user + "!!?",
      1: "hey, " + this.state.user + " ready to shred!!?",
      2: "great to see you " + this.state.user + ' "AKA" the coolest kid at the skate park',
      3: this.state.user + " remember, pain is just weakness leaving body after your board hits you in the shin repeatedly",
      4: this.state.user + " remember to look cool",
      5: "its been a minute " + this.state.user + "...",
      6: this.state.user + "! remember to put some ice on that",
      7: "have a good skate sesh! " + this.state.user,
      8: "sup " + this.state.user + ", I hope there aren't too many skooter kids around...",
    } 
    return greetings[Math.floor(Math.random() * 9)]
  } 

  _trickMenuSelector() {
    return (
      <Provider store={this.store}>

        <ImageBackground source={Image2} style={localStyles.backImage} imageStyle={{ opacity: 0.7 }}>
        <View style={localStyles.outer} >
        <View style={localStyles.inner} >
        <ScrollView showsVerticalScrollIndicator={false} >

        <Text style={localStyles.flipplyText}>
        flipply 
        </Text>

        <Text style={localStyles.welcomeText}>
        {this._greetingRandomizer()}
        </Text>

        <Text style={localStyles.titleText}>
        Beginner 
        </Text>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(OLLIE_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        ollie 
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(POPSHUV_BS_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.longButtonText}>
        backside{"\n"}pop shuv-it
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(POPSHUV_FS_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.longButtonText}>
        frontside {"\n"}pop shuv-it
        </Text>
        </TouchableHighlight>

        <Text style={localStyles.titleText}>
        Intermediate
        </Text>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(KICKFLIP_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        kickflip
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(HEELFLIP_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        heelflip 
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(VARIALFLIP_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        varial flip
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(VARIALHEELFLIP_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        varial Heel
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(HARDFLIP_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        hard flip
        </Text>
        </TouchableHighlight>

        <Text style={localStyles.titleText}>
        Advanced
        </Text>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(_3SHUV_BS_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.longButtonText}>
        backside 360 shuv-it
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(_360FLIP_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        360 flip
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(_3SHUV_FS_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.longButtonText}>
        frontside 360 shuv-it
        </Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
        onPress={this._begin_TrickMenu(LASERFLIP_MENU)}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        laser flip
        </Text>
        </TouchableHighlight>

        </ScrollView>
        </View>
        </View>
        </ImageBackground> 
      </Provider>
    );
  }
// MENUS
  _begin_TrickMenu(TrickMenu) {
    return () => {
      this.setState({ 
        topNavigatorType: trick_menu_nav,
        lastClickedTrickMenu : TrickMenu
      })
    } 
  }

   VARIALFLIP_MENU 
  _init_TrickMenu(TrickMenu) { 
    menus = {
      OLLIE_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                        <OllieMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} _begin_TrickScene={this._begin_TrickScene()} />
                        </View></Provider>,
      POPSHUV_BS_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                             <PopShuv_bs_Menu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                             </View></Provider>,
      POPSHUV_FS_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                             <PopShuv_fs_Menu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                             </View></Provider>,
      KICKFLIP_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                           <KickflipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                           </View></Provider>,
      HEELFLIP_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                           <HeelflipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                           </View></Provider>,
      VARIALFLIP_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                             <VarialflipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                             </View></Provider>,
      VARIALHEELFLIP_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                                 <VarialheelflipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                                 </View></Provider>,
      HARDFLIP_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                           <HardflipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                           </View></Provider>,
      _3SHUV_BS_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                            <_3Shuv_bs_Menu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                            </View></Provider>,
      _360FLIP_MENU: () => <Provider store={this.store}><View style={localStyles.outer}>
                           <_360flipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                           </View></Provider>,
      _3SHUV_FS_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                            <_3Shuv_fs_Menu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                            </View></Provider>,
      LASERFLIP_MENU: () => <Provider store={this.store}><View style={localStyles.outer}> 
                            <LaserflipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} naturalStance={this.state.stance} _begin_TrickScene={this._begin_TrickScene()} />
                            </View></Provider>,
    }
    return menus[TrickMenu]()
  }

  _begin_TrickScene(TrickScene) {
    return (TrickScene) => {
      this.setState({ 
        topNavigatorType : trick_scene_nav,
        lastClickedTrickScene : TrickScene
      })
    } 
  }

_init_TrickScene(TrickScene) {
  TrickSceneSelectorDispatch = {
    OLLIE_SCENE: () =>  { const Ollie_trick_SCENE = require('./js/res/scenes/ollieSceneAR');
                          return (<Provider store={this.store}><View style={localStyles.flex}>
                          <StatusBar hidden={false}/>
                          <ViroARSceneNavigator initialScene={{scene: Ollie_trick_SCENE}} />
                          {this._backARROW_scene()}
                          </View></Provider>); },
    POPSHUV_BS_SCENE: () => { const PopShuv_bs_trick_SCENE = require('./js/res/scenes/PopShuv_bs_SceneAR');
                              return (<Provider store={this.store}><View style={localStyles.flex}>
                              <StatusBar hidden={false}/>
                              <ViroARSceneNavigator initialScene={{scene: PopShuv_bs_trick_SCENE}} />
                              {this._backARROW_scene()}
                              </View></Provider>); },
    POPSHUV_FS_SCENE: () => { const PopShuv_fs_trick_SCENE = require('./js/res/scenes/PopShuv_fs_SceneAR.js');
                              return (<Provider store={this.store}><View style={localStyles.flex}>
                              <StatusBar hidden={false}/>
                              <ViroARSceneNavigator initialScene={{scene: PopShuv_fs_trick_SCENE}} />
                              {this._backARROW_scene()}
                              </View></Provider>); },
    KICKFLIP_SCENE: () => { const kickflipSceneAR = require('./js/res/scenes/kickflipSceneAR');
                            return (<Provider store={this.store}><View style={localStyles.flex}>
                            <StatusBar hidden={false}/>
                            <ViroARSceneNavigator initialScene={{scene: kickflipSceneAR}} />
                            {this._backARROW_scene()}
                            </View></Provider>); },
    HEELFLIP_SCENE: () => { const heelflipSceneAR = require('./js/res/scenes/heelflipSceneAR');
                            return (<Provider store={this.store}><View style={localStyles.flex}>
                            <StatusBar hidden={false}/>
                            <ViroARSceneNavigator initialScene={{scene: heelflipSceneAR }} />
                            {this._backARROW_scene()}
                            </View></Provider>); },
    VARIALFLIP_SCENE: () => { const varialflipSceneAR = require('./js/res/scenes/varialflipSceneAR');
                              return (<Provider store={this.store}><View style={localStyles.flex}>
                              <StatusBar hidden={false}/>
                              <ViroARSceneNavigator initialScene={{scene: varialflipSceneAR }} />
                              {this._backARROW_scene()}
                              </View></Provider>); },
    VARIALHEELFLIP_SCENE: () => { const varialheelflipSceneAR = require('./js/res/scenes/varial_heelflipSceneAR');
                                  return (<Provider store={this.store}><View style={localStyles.flex}>
                                  <StatusBar hidden={false}/>
                                  <ViroARSceneNavigator initialScene={{scene: varialheelflipSceneAR }} />
                                  {this._backARROW_scene()}
                                  </View></Provider>); },
    HARDFLIP_SCENE: () => { const hardflipSceneAR = require('./js/res/scenes/hardflipSceneAR.js');
                            return (<Provider store={this.store}><View style={localStyles.flex}>
                            <StatusBar hidden={false}/>
                            <ViroARSceneNavigator initialScene={{scene: hardflipSceneAR }} />
                            {this._backARROW_scene()}
                            </View></Provider>); },
    _3SHUV_BS_SCENE: () => { const _3Shuv_bs_SceneAR = require('./js/res/scenes/_3Shuv_bs_SceneAR.js');
                             return (<Provider store={this.store}><View style={localStyles.flex}>
                             <StatusBar hidden={false}/>
                             <ViroARSceneNavigator initialScene={{scene: _3Shuv_bs_SceneAR }} />
                             {this._backARROW_scene()}
                             </View></Provider>); },
    _360FLIP_SCENE: () => { const _360flipSceneAR = require('./js/res/scenes/_360flipSceneAR');
                            return (<Provider store={this.store}><View style={localStyles.flex}>
                            <StatusBar hidden={false}/>
                            <ViroARSceneNavigator initialScene={{scene: _360flipSceneAR}} />
                            {this._backARROW_scene()}
                            </View></Provider>); },
    _3SHUV_FS_SCENE: () => { const _3Shuv_fs_SceneAR = require('./js/res/scenes/_3Shuv_fs_SceneAR.js');
                             return (<Provider store={this.store}><View style={localStyles.flex}>
                             <StatusBar hidden={false}/>
                             <ViroARSceneNavigator initialScene={{scene: _3Shuv_fs_SceneAR }} />
                             {this._backARROW_scene()}
                             </View></Provider>); },
    LASERFLIP_SCENE: () => { const laserflipSceneAR = require('./js/res/scenes/laserflipSceneAR');
                             return (<Provider store={this.store}><View style={localStyles.flex}>
                             <StatusBar hidden={false}/>
                             <ViroARSceneNavigator initialScene={{scene: laserflipSceneAR}} />
                             {this._backARROW_scene()}
                             </View></Provider>); },
            }
    return TrickSceneSelectorDispatch[TrickScene]()
  }



  _back_toTricksMenu() {
    return () => {
      this.setState({
        topNavigatorType : trick_menu_nav,
        lastClickedTrickScene : defaultTrickScene 
      })
    }
  } 

  _backARROW_scene() {
    return (
        <View style={localStyles.topMenu}>
          <TouchableOpacity style={localStyles.flex}activeOpacity={.5} onPress={this._back_toTricksMenu()}>
          <Image 
          style={localStyles.topMenu}
          source={require('./js/res/archive/icon_left_w.png')}        
          />
          </TouchableOpacity>
        </View>
      );
  }

//out of trick menu to main trick menu
  _back_toMainTrickMenu() {
        return () => {
          this.setState({
            topNavigatorType : trickMenu,
            lastClickedTrickMenu : defaultTrickMenu 
          })
        }
    } 
}

const localStyles = StyleSheet.create({
  flex :{
    flex : 1,
  },
  viroContainer :{
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
    marginLeft: 20,
    flexDirection: 'column',
    alignItems:'center',
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  flipplyText: {
    paddingTop: 30,
    paddingBottom: 20,
    fontFamily: 'Futura-CondensedExtraBold',
    fontWeight: 'bold',
    color:'black',
    textAlign:'center',
    fontSize : 40 
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    marginTop: 10,
    fontSize : 20
  },
  longButtonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 16
  },
  slimButtonText: {
    color:'#fff',
    textAlign:'center',
    fontSize: 20 
  },
  buttons : {
    height: 100,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'hsla(205, 83%, 16%, 0.67)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  slimButtons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'hsla(205, 83%, 16%, 0.67)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  topMenu: {
    height : '20%',
    width : '40%',
    position: 'absolute',
    marginTop: 15,
    top : 0,
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: 'hsla(205, 83%, 16%, 0.87)'
  },
  welcomeText: {    
    fontFamily: 'Futura-CondensedExtraBold',
    fontWeight: 'bold',
    color:'black',
    textAlign:'center',
    marginBottom: 5,
    fontSize : 20 
  },
});

export default ViroSample

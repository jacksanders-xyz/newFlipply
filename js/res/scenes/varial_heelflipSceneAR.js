'use strict';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet, View } from 'react-native';


import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  ViroButton,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroConstants,
  ViroAnimations,
} from 'react-viro';


const varial_heelflipSceneAR = () => {

  const dispatch = useDispatch()
  const stance = useSelector((state) => state.stance)

  const [bootText, setBootText] = useState("Initializing AR...");
  const [flipMoment, setflipMoment] = useState("roll");
  const [flipping, setflipping] = useState(false);

  const trickStarter = () => {
    return setflipping(true)
  }

  const trickStateManager = () => {
    if (flipMoment == "roll") {
      return setflipMoment("prePop")
    } else if (flipMoment == "prePop") {
      return setflipMoment("pop")
    } else if (flipMoment == "pop") {
      return setflipMoment("postPop")
    } else if (flipMoment == "postPop") {
      return setflipMoment("levelOut")
    } else if (flipMoment == "levelOut") {
      return setflipMoment("land")
    } else if (flipMoment == "land") {
      return setflipMoment("rollAway")
    } else if (flipMoment == "rollAway") {
       setflipping(false) 
       setflipMoment("roll") 
    } 
  }
 
  const _onInitialized = (state, reason) => {
      if (state == ViroConstants.TRACKING_NORMAL) {
          setBootText("getting ready to shred...")
      } else if (state == ViroConstants.TRACKING_NONE) {
      }
  }
//
  
const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});


const stanceSelector = () => {
  if(stance == "goofy") {
    return {
      roll: {
        properties: {
          positionX: "-=0.3",
        },
        duration: 200,
      },
      prePop: {
        properties: {
          rotateZ: "-=45",
          rotateY: "+=45",
          positionY: "+=0.18",
          positionX: "-=0.1",
        },
        duration: 200,
      },
      pop: {
        properties: {
          rotateX: "-=150",
          rotateY: "+=45",
          positionY: "+=0.3",
          positionX: "-=0.1",
        },
        duration: 300,
      },
      postPop: {
        properties: {
          rotateZ: "+=35", 
          rotateY: "+=45",
          rotateX: "-=150",
          positionX: "-=0.3",
        },
        duration: 200,
      },
      levelOut: {
        properties: {
          rotateY: "+=45",
          rotateZ: "+=10", 
          rotateX: "-=60",
          positionX: "-=0.3",
        },
        duration: 200,
      },
      land: {
        properties: {
          positionY: "-=0.48",
          positionX: "-=0.3",
        },
        duration: 200,
      },
      rollAway: {
        properties: {
          positionX: "-=0.4",
        },
        duration: 200,
      },
    }
  }
  else if(stance == "regular") {
    return {
      roll: {
        properties: {
          positionX: "-=0.3",
        },
        duration: 200,
      },
      prePop: {
        properties: {
          rotateZ: "-=45",
          rotateY: "-=45",
          positionY: "+=0.18",
          positionX: "-=0.1",
        },
        duration: 200,
      },
      pop: {
        properties: {
          rotateX: "+=150",
          rotateY: "-=45",
          positionY: "+=0.3",
          positionX: "-=0.1",
        },
        duration: 200,
      },
      postPop: {
        properties: {
          rotateZ: "+=35", 
          rotateY: "-=45",
          rotateX: "+=150",
          positionX: "-=0.3",
        },
        duration: 200,
      },
      levelOut: {
        properties: {
          rotateY: "-=45",
          rotateZ: "+=10", 
          rotateX: "+=60",
          positionX: "-=0.3",
        },
        duration: 200,
      },
      land: {
        properties: {
          positionY: "-=0.48",
          positionX: "-=0.3",
        },
        duration: 200,
      },
      rollAway: {
        properties: {
          positionX: "-=0.4",
        },
        duration: 200,
      },
    }
  }
}
ViroAnimations.registerAnimations(stanceSelector());
  return (
    <ViroARScene onTrackingUpdated={_onInitialized} >
    <ViroAmbientLight color={"#aaaaaa"} />
    <ViroNode position={[0.5,-0.2,-1]} dragType="FixedToWorld" onDrag={()=>{}} >
    <Viro3DObject 
    source={require('../archive/Skateboard.gltf')}
    resources={[
      require('../archive/Skateboard_BaseColor.png'),
      require('../archive/Skateboard.bin')
    ]}
    onClick={trickStarter}
    position={[0.5, -0.2, -1.0]}
    scale={[0.1, 0.1, 0.1]}
    animation={{
        name: flipMoment,
        run: flipping,
        onFinish: () => trickStateManager()
    }}           
    type="GLTF"
    />
    </ViroNode>
    </ViroARScene>
  );
}
module.exports = varial_heelflipSceneAR;


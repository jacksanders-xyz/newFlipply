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


const _360flipSceneAR = (props) => {
  
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
          positionX: "-=0.40",
        },
        duration: 400, //.5 seconds
      },
      prePop: {
        properties: {
          rotateZ: "-=75",
          rotateY: "+=60",
          rotateX: "-=40",
          positionY: "+=0.15",
          positionX: "-=0.05",
          positionZ: "-=0.04"
        },
        duration: 200, //.5 seconds
      },
      pop: {
        properties: {
          rotateZ: "+=80",
          rotateY: "+=80",
          rotateX: "-=100",
          positionY: "+=0.2",
          positionX: "-=0.05",
          positionZ: "-=0.06"
        },
        duration: 200, //.5 seconds
      },
      postPop: {
        properties: {
          rotateZ: "-=15",
          rotateY: "+=80",
          rotateX: "-=80",
          positionY: "+=0.08",
          positionX: "-=0.26",
        },
        duration: 200, //.5 seconds
      },
      levelOut: {
        properties: {
          rotateZ: "+=10",
          rotateY: "+=75",
          rotateX: "-=70",
          positionX: "-=0.16",
          positionY: "-=0.09",
        },
        duration: 200, //.5 seconds
      },
      land: {
        properties: {
          rotateY: "+=65",
          rotateX: "-=70",
          positionY: "-=0.34",
          positionX: "-=0.18",
        },
        duration: 200, //.5 seconds
      },
      rollAway: {
        properties: {
          positionX: "-=0.4",
        },
          duration: 400, //.5 seconds
      },
    }
  }
  else if(stance == "regular") {
    return {
      roll: {
        properties: {
          positionX: "-=0.40",
        },
        duration: 400, //.5 seconds
      },
      prePop: {
        properties: {
          rotateZ: "-=75",
          rotateY: "-=60",
          rotateX: "+=40",
          positionY: "+=0.15",
          positionX: "-=0.05",
          positionZ: "-=0.04"
        },
        duration: 200, //.5 seconds
      },
      pop: {
        properties: {
          rotateZ: "+=80",
          rotateY: "-=80",
          rotateX: "+=100",
          positionY: "+=0.2",
          positionX: "-=0.05",
          positionZ: "-=0.06"
        },
        duration: 200, //.5 seconds
      },
      postPop: {
        properties: {
          rotateZ: "-=15",
          rotateY: "-=80",
          rotateX: "+=80",
          positionY: "+=0.08",
          positionX: "-=0.26",
        },
        duration: 200, //.5 seconds
      },
      levelOut: {
        properties: {
          rotateZ: "+=10",
          rotateY: "-=75",
          rotateX: "+=70",
          positionX: "-=0.16",
          positionY: "-=0.09",
        },
        duration: 200, //.5 seconds
      },
      land: {
        properties: {
          rotateY: "-=65",
          rotateX: "+=70",
          positionY: "-=0.34",
          positionX: "-=0.18",
        },
        duration: 200, //.5 seconds
      },
      rollAway: {
        properties: {
          positionX: "-=0.4",
        },
          duration: 400, //.5 seconds
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
//
module.exports = _360flipSceneAR;

import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { Box, HStack, Image, VStack } from 'native-base'
import Lottie from 'lottie-react-native';
import reactions from './reactions_json';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, Extrapolate } from "react-native-reanimated"

const REACTION_CONTAINER_HEIGHT: number = 100
interface Props  {
  scaleY : any;
  opacity : any;
  handleCloseReactions: () => void;
}
const Post : React.FC<Props> = ({scaleY,opacity,handleCloseReactions}) => {

 
  const reactionAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: withTiming(scaleY.value, { duration: 500 }) }],
      opacity: withTiming(opacity.value, { duration: 500 })
    }
  })



  return (
    <Animated.View style={[reactionAnimatedStyle]} >
          <HStack borderRadius={30} height={REACTION_CONTAINER_HEIGHT} overflow={'hidden'} px={5} alignItems={'center'} justifyContent={'space-between'} w={'100%'} position={'absolute'} backgroundColor={'rgba(199, 199, 199, 0.75)'} top={-REACTION_CONTAINER_HEIGHT} >
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.like} style={{ width: 80, transform: [{ scale: 1.5 }] }} autoPlay loop />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.laugh} style={{ width: 80, transform: [{ scale: .95 }] }} autoPlay loop />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.dislike} style={{ width: 80, transform: [{ scale: 1.2 }] }} autoPlay loop />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.heart} style={{ width: 80, transform: [{ scale: 1.8 }] }} autoPlay loop />
            </TouchableOpacity>

          </HStack>
        </Animated.View>
  )
}

export default Post

const styles = StyleSheet.create({

})
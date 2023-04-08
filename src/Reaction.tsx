import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack,} from 'native-base'
import Lottie from 'lottie-react-native';
import reactions from './reactions_json';
import Animated, {  useAnimatedStyle, withTiming } from "react-native-reanimated"

const REACTION_CONTAINER_HEIGHT: number = 100
interface Props  {
  scaleY : any;
  opacity : any;
  handleCloseReactions: () => void;
}
const Post : React.FC<Props> = React.memo( ({scaleY,opacity,handleCloseReactions}) => {

 
  const reactionAnimatedStyle = React.useCallback(()=>{
    return useAnimatedStyle(() => {
      return {
        transform: [{ scaleY: withTiming(scaleY.value, { duration: 500 }) }],
        opacity: withTiming(opacity.value, { duration: 250 })
      }
    })
  },[scaleY,opacity])



  return (
    <Animated.View style={[reactionAnimatedStyle(),{marginHorizontal:5}]} >
          <HStack width="full" borderRadius={30} height={REACTION_CONTAINER_HEIGHT} overflow={'hidden'} px={5} alignItems={'center'} justifyContent={'space-between'} w={'100%'} position={'absolute'} backgroundColor={'rgba(199, 199, 199, 0.75)'} top={-REACTION_CONTAINER_HEIGHT} >
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.like} style={{ width: 80, transform: [{ scale: 1.5 }] }} autoPlay loop />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.heart} style={{ width: 80, transform: [{ scale: 1.8 }] }} autoPlay loop />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.laugh} style={{ width: 80, transform: [{ scale: .95 }] }} autoPlay loop />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseReactions}>
              <Lottie source={reactions.dislike} style={{ width: 80, transform: [{ scale: 1.2 }] }} autoPlay loop />
            </TouchableOpacity>

          </HStack>
        </Animated.View>
  )
})

export default Post

const styles = StyleSheet.create({

})
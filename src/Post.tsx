import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { Box, HStack, Image, VStack } from 'native-base'
import Lottie from 'lottie-react-native';
import reactions from './reactions_json';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, Extrapolate } from "react-native-reanimated"
import Reactions from './Reaction'

const Post = () => {
    const { height } = useWindowDimensions()

    const scaleY = useSharedValue(0)
    const opacity = useSharedValue(0)

    function handleShowReactions() {
        scaleY.value = 1
        opacity.value = 1
        console.log('handleShowReactions')
    }
    function handleCloseReactions() {
        scaleY.value = 0
        opacity.value = 0
        console.log('handleCloseReactions')
    }



    return (
        <VStack space={5} height={height / 2} >
            <Box height={"80%"} backgroundColor={'red.600'} />

            <VStack position={'relative'} >
                <Reactions handleCloseReactions={handleCloseReactions}  opacity={opacity} scaleY={scaleY} />
                <HStack>
                    <TouchableOpacity onLongPress={handleShowReactions} >
                        <Text style={{ color: "blue", fontSize: 17 }} >Like</Text>
                    </TouchableOpacity>
                </HStack>
            </VStack>

        </VStack>
    )
}

export default Post

const styles = StyleSheet.create({

})
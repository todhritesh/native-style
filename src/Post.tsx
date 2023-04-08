import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { Box, HStack, VStack } from 'native-base'
import { useSharedValue } from "react-native-reanimated"
import Reactions from './Reaction'
interface Props {
    reactionRef : any
}
const Post : React.FC<Props> = ({reactionRef}) => {
    const { height } = useWindowDimensions()

    const scaleY = useSharedValue(0)
    const opacity = useSharedValue(0)


    const handleShowReactions = React.useCallback(() =>{
        if(reactionRef.current){
            console.log(reactionRef.current,"in ref")
            reactionRef.current.scaleY.value = 0
            reactionRef.current.opacity.value = 0
        }
        scaleY.value = 1
        opacity.value = 1
        reactionRef.current = {scaleY,opacity}
        console.log('handleShowReactions')
    },[reactionRef , opacity , scaleY ])

    const handleCloseReactions = React.useCallback(() => {
        scaleY.value = 0
        opacity.value = 0
        console.log('handleCloseReactions')
    },[scaleY,opacity])    



    return (
        <VStack space={5} height={height / 3} >
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
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
        handleReactionRefClose()
        scaleY.value = 1
        opacity.value = 1
        reactionRef.current = {scaleY,opacity}
        console.log('handleShowReactions')
    },[reactionRef , opacity , scaleY ])

    const handleCloseReactions = React.useCallback((tappped_reaction:string) => {
        scaleY.value = 0
        opacity.value = 0
        console.log('handleCloseReactions',tappped_reaction)
    },[scaleY,opacity])    


    const handleReactionRefClose = React.useCallback(() =>{
        if(reactionRef.current){
            console.log('reaction close')
            reactionRef.current.scaleY.value = 0
            reactionRef.current.opacity.value = 0
        }
    },[])

    const handlePress = React.useCallback(() =>{
        handleReactionRefClose()
        console.log('handle press')
    },[])



    return (
        <VStack space={5} height={height / 2} >
            <Box height={"80%"} backgroundColor={'red.600'} >
                <Text style={{fontSize:20,color:"white"}} >Hello Post</Text>
            </Box>
            <VStack position={'relative'} space={3} >
               <Reactions handleCloseReactions={handleCloseReactions}  opacity={opacity} scaleY={scaleY} />
                
                <HStack zIndex={11} justifyContent={'space-between'}  >
                    <TouchableOpacity style={{backgroundColor:"pink"}} onPress={handlePress} onLongPress={handleShowReactions} >
                        <Text style={{ color: "blue", fontSize: 17,padding:5 }} >Like</Text>
                    </TouchableOpacity>
                </HStack>
            </VStack>

        </VStack>
    )
}

export default React.memo(Post)

const styles = StyleSheet.create({

})
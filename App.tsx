import React from "react";
import { Box, NativeBaseProvider, ScrollView , VStack } from "native-base";
import Post from "./src/Post";

export default function App() {
  const reactionRef = React.useRef(null)
  return (
    <NativeBaseProvider>
      <Box p={2} >
        <ScrollView>
          <VStack space={10} >
            <Post reactionRef={reactionRef} />
            <Post reactionRef={reactionRef} />
            <Post reactionRef={reactionRef} />
          </VStack>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
import React from "react";
import { Box, NativeBaseProvider } from "native-base";
import Post from "./src/Post";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box p={2} >
        <Post/>
      </Box>
    </NativeBaseProvider>
  );
}
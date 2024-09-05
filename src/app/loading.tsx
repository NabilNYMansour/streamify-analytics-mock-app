import { Box, Center, Loader, LoadingOverlay } from "@mantine/core";

export default function Loading() {
  return <Center w="100%" h="100%">
    <Loader type="dots" size={250}/>
  </Center>
}
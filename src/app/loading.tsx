import { flexGap } from "@/lib/constants";
import { Flex, Skeleton, Title } from "@mantine/core";

export default function Loading() {
  return (
    <Flex direction="column" w="100%" align="center" style={{ overflowY: "auto" }} pr={25}>
      <Flex direction="column" gap={flexGap} wrap="wrap" pt={25} pb={25}>
        <Skeleton><Title order={1} ff="inherit" mt={10}>Title</Title></Skeleton>
        <Skeleton w={780} h={391} />
        <Skeleton w={780} h={319.09} />
        <Skeleton w={780} h={369} />
      </Flex>
    </Flex>
  )
}
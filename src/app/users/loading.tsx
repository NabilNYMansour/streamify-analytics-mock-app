import { flexGap } from "@/lib/constants";
import { Flex, Skeleton, Title } from "@mantine/core";

export default function Loading() {
  return <Flex direction="column" w="100%" align="center" style={{ overflowY: "auto" }} pr={25}>
    <Flex direction="column" gap={flexGap} wrap="wrap" pt={25} pb={25} maw={780} w="100%">
      <Title order={1} ff="inherit" mt={10}>Users</Title>
      <Skeleton height={36} w="100%" />
      <Flex align="center" justify="space-between" gap={flexGap} w="100%">
        <Skeleton height={36} w="100%" />
        <Skeleton height={36} w="100%" />
      </Flex>
      <Skeleton height={638} w="100%" />
      <Flex align="center" justify="space-between" gap={flexGap} w="100%">
        <Skeleton height={36} w="100%" />
        <Skeleton height={36} w="100%" />
      </Flex>
    </Flex>
  </Flex>
}
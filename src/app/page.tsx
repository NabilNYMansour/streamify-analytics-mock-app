import { Flex, Title } from "@mantine/core";

export default async function HomePage() {
  return (
    <Flex direction="column" w="100%" mt={40}>
      <Title order={1} ff="inherit">Home</Title>
    </Flex>
  );
}

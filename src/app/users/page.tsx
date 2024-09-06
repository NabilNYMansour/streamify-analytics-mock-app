import { Flex, Title } from "@mantine/core";
import UserTable from "../ui/components/users/userTable";

const gap = 15;

const Page = () => {
  return (
    <Flex direction="column" w="100%" align="center" style={{ overflowY: "auto" }} pr={25}>
      <Flex direction="column" gap={gap} wrap="wrap" pt={25} pb={25} maw={780} w="100%">

        <Title order={1} ff="inherit" mt={10}>Users</Title>
        <UserTable users={[]} usersCount={0} currentPage={1} pagesCount={1} />
      </Flex>
    </Flex>
  );
};

export default Page;
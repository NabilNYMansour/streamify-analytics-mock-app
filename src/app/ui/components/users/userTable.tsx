import { SelectUser } from "@/db/schema";
import { Flex, TextInput } from "@mantine/core";
import { FaMagnifyingGlass, FaSort } from 'react-icons/fa6';


const UserTable = ({ users, usersCount, currentPage, pagesCount }:
  { users: SelectUser[], usersCount: number, currentPage: number, pagesCount: number }
) => {
  return (
    <Flex direction="column" w="50%">
      <TextInput  size="lg" leftSection={<FaMagnifyingGlass size={20} />} placeholder="Search" /> 
    </Flex>
  );
};

export default UserTable;
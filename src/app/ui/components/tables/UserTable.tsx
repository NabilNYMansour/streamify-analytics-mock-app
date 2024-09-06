import { getUsers } from "@/db/queries";
import { Avatar, Card, Flex, Group, Skeleton, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import classes from "./UserTable.module.css";
import { MdOutlineSearchOff } from 'react-icons/md';

const UserTableSkeleton = () => {
  return <Skeleton height={638.6} w="100%" className={classes.table} />
}

const UserTable = async ({ currentPage, limit, search, sort }:
  { currentPage: number, limit: number, search: string, sort: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate loading delay
  const users = await getUsers(currentPage, limit, search, sort);

  return (
    <Card withBorder w="100%" p={0} bg="transparent" style={{ overflow: "auto" }} className={classes.table}>
      <Table striped highlightOnHover>
        <TableThead>
          <TableTr>
            <TableTh>User</TableTh>
            <TableTh>Username</TableTh>
            <TableTh>Last signed in</TableTh>
            <TableTh>Joined</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {users.map((user) => (
            <TableTr key={user.id}>
              <TableTd>
                <Flex gap={10} align="center" maw={300}>
                  <Avatar key={user.id} name={user.name} color="initials" />
                  <Flex direction="column" >
                    <Text size="md" lineClamp={1}>{user.name}</Text>
                    <Text size="sm" c="dimmed" lineClamp={1}>{user.email}</Text>
                  </Flex>
                </Flex>
              </TableTd>
              <TableTd>{user.username}</TableTd>
              <TableTd>{new Date(user.lastSignedIn).toLocaleDateString()}</TableTd>
              <TableTd>{new Date(user.joined).toLocaleDateString()}</TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
      {users.length === 0 && <Group p={25} justify="center">
        <MdOutlineSearchOff size={28} />
        <Title order={3} ff="inherit"> No users found</Title>
      </Group>}
    </Card>
  );
};

export default dynamic(() => Promise.resolve(UserTable), {
  ssr: true,
  loading: () => <UserTableSkeleton />
});
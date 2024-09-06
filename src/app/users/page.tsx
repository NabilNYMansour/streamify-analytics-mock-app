"use server";

import { Flex, Title } from "@mantine/core";
import UserTable from "../ui/components/tables/UserTable";
import { flexGap } from "@/lib/constants";
import { getUsersCount } from "@/db/queries";
import PaginationControls from "../ui/components/paramsEditors/PaginationControls";
import { SearchParams } from "@/lib/types";
import PageLimitControls from "../ui/components/paramsEditors/PageLimitControls";
import UserSearchSortControls from "../ui/components/paramsEditors/UserSearchSortControls";

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  const limit = searchParams.limit ? Number(searchParams.limit) : 10;
  const search = searchParams.search ? String(searchParams.search) : "";
  const sort = searchParams.sort ? String(searchParams.sort) : "";

  const usersCount = (await getUsersCount(search, sort))[0].count;
  const pagesCount = Math.ceil(usersCount / limit);

  return (
    <Flex direction="column" w="100%" align="center" style={{ overflowY: "auto" }} pr={25}>
      <Flex direction="column" gap={flexGap} wrap="wrap" pt={25} pb={25} maw={780} w="100%">
        <Title order={1} ff="inherit" mt={10}>Users</Title>
        <UserSearchSortControls usersCount={usersCount} />
        <Flex w="100%" key={currentPage + limit + search + sort}>
          <UserTable currentPage={currentPage} limit={limit} search={search} sort={sort} />
        </Flex>
        <Flex justify="space-between" align="flex-start" wrap="wrap" gap={flexGap}>
          <PageLimitControls limit={limit} />
          <PaginationControls currentPage={currentPage} pagesCount={pagesCount} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;
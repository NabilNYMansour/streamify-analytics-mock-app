"use client";

import { flexGap } from "@/lib/constants";
import { ActionIcon, Flex, Select, Text, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import classes from "./params.module.css";

const sortOptions = ['Username', 'Joined', 'Last sign in']

function getSortKey(value: string): string {
  switch (value) {
    case "":
      return "Username";
    case "last":
      return "Last sign in";
    case "joined":
      return "Joined";
    default:
      return "Username";
  }
}

function getSortValue(key: string): string {
  switch (key) {
    case "Username":
      return "";
    case "Last sign in":
      return "last";
    case "Joined":
      return "joined";
    default:
      return "";
  }
}

const UserSearchSortControls = ({ usersCount }: { usersCount: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchValue, setSearchValue] = useState<string>(searchParams.get("search") ?? "");
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 500);
  const [sortValue, setSortValue] = useState<string>(getSortKey(searchParams.get("sort") ?? ""));

  //============= Search url param =============//
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  useEffect(() => {
    handleSearch(debouncedSearchValue);
  }, [debouncedSearchValue]);

  //============= Sort url param =============//
  function handleSort(sort: string) {
    const params = new URLSearchParams(searchParams);
    if (sort) {
      params.set('sort', sort);
    } else {
      params.delete('sort');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  useEffect(() => {
    handleSort(getSortValue(sortValue));
  }, [sortValue]);

  return (
    <Flex gap={flexGap} direction="column" w="100%">
      <TextInput size="sm" flex={2}
        placeholder="Search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        leftSection={<FaMagnifyingGlass size={10} />}
        rightSection={
          <ActionIcon variant='subtle' radius="xl"
            aria-label="Clear input"
            color="dimmed"
            onClick={() => setSearchValue("")}
            style={{ display: searchValue ? undefined : 'none' }}>
            <RxCross1 />
          </ActionIcon>
        } />
      <Flex align="center" justify="space-between" gap={flexGap} wrap="wrap-reverse">
        <Text key={usersCount}
          fs="italic" c="dimmed"
          className={classes.count}
          visibleFrom="xs" size="lg">
          {usersCount} users
        </Text>
        <Flex align="center" gap={5} ml="auto">
          <Text fs="italic" c="dimmed" size="xs">Sort by</Text>
          <Select
            flex={1} maw={250}
            checkIconPosition="right"
            placeholder="Sort by" size="xs"
            defaultValue={sortValue}
            data={sortOptions}
            allowDeselect={false}
            rightSection={<IoIosArrowDown size={20} />}
            onChange={(value) => setSortValue(value ?? "")}
            comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 200 } }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserSearchSortControls;
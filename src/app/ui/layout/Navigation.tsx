"use client";

import { Button, Flex, Tooltip } from '@mantine/core';
import Logo from '../components/Logo';
import { FaUsers, FaHome, FaMoneyBill, FaMusic } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { IoExitOutline } from "react-icons/io5";
import Link from 'next/link';

const Navigation = () => {
  const currPath = usePathname();

  return (
    <Flex h="100%" p={25} direction="column" gap={10}>
      <Logo />
      {/* <Divider my="sm" w="100%" size="sm" /> */}

      <Button size='xl' justify='flex-start' component={Link} href="/"
        variant={currPath === '/' ? 'filled' : 'default'}
        leftSection={<FaHome size={20} />}>
        Home
      </Button>

      <Button size='xl' justify='flex-start' component={Link} href="/users"
        variant={currPath === '/users' ? 'filled' : 'default'}
        leftSection={<FaUsers size={20} />}>
        Users
      </Button>

      <Button size='xl' justify='flex-start' component={Link} href="/revenue"
        variant={currPath === '/revenue' ? 'filled' : 'default'}
        leftSection={<FaMoneyBill size={20} />}>
        Revenue
      </Button>

      <Button size='xl' justify='flex-start' component={Link} href="/songs"
        variant={currPath === '/songs' ? 'filled' : 'default'}
        leftSection={<FaMusic size={20} />}>
        Songs
      </Button>

      <Tooltip openDelay={100} closeDelay={50} withArrow
        label="In a real app, this wouldn't be disabled">
        <Button size='xl' justify='flex-start' mt="auto" disabled
          variant="default"
          leftSection={<IoExitOutline size={25} />}>
          Sign out
        </Button>
      </Tooltip>
    </Flex>
  );
};

export default Navigation;
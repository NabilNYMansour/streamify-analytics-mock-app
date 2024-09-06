"use client";

import { Button, Flex, Tooltip } from '@mantine/core';
import Logo from '../components/other/Logo';
import { FaUsers, FaHome, FaMoneyBill, FaMusic } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { IoExitOutline } from "react-icons/io5";
import Link from 'next/link';
import ActionButton from '../components/buttons/ActionButton';

const Navigation = () => {
  const currPath = usePathname();

  return (
    <Flex h="100%" p={25} direction="column" gap={10}>
      <Logo />

      <ActionButton label={"Home"} icon={<FaHome size={20} />} currPath={currPath} href='/' />

      <ActionButton label={"Users"} icon={<FaUsers size={20} />} currPath={currPath} href='/users' />

      <ActionButton label={"Revenue"} icon={<FaMoneyBill size={20} />} currPath={currPath} href='/revenue' />

      <ActionButton label={"Songs"} icon={<FaMusic size={20} />} currPath={currPath} href='/songs' />

      {/* In a real app, this wouldn't be disabled */}
      <ActionButton label={"Sign out"} icon={<IoExitOutline size={20} />}
        currPath={currPath} href='/' mt="auto" disabled />
    </Flex>
  );
};

export default Navigation;
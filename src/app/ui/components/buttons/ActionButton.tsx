import { ActionIcon, Button } from "@mantine/core";
import Link from "next/link";

const fromSize = "xl";

const ActionButton = ({ label, currPath, href, icon, mt, disabled }:
  { label: string, currPath: string, href: string, icon: JSX.Element, mt?: "auto", disabled?: boolean }) => {
  return (
    <>
      <ActionIcon size="xl" component={Link} href={href} hiddenFrom={fromSize} aria-label={label}
        variant={currPath === href ? 'filled' : 'default'} mt={mt} disabled={disabled}>
        {icon}
      </ActionIcon>
      <Button size='xl' justify='flex-start' component={Link} href={href} visibleFrom={fromSize}
        variant={currPath === href ? 'filled' : 'default'} mt={mt} disabled={disabled}
        leftSection={icon}>
        {label}
      </Button>
    </>
  );
};

export default ActionButton;
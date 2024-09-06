import { ActionIcon, Card, Flex, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import classes from "./Logo.module.css";


const Logo = () => {
  return (
    <>
      <Card className={classes.logo} component={Link} href="/" withBorder p={25} visibleFrom="xl" mb={10}>
        <Flex justify="center" align="center" gap={10}>
          <Image
            src="/streamify.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <Title order={3} ff="inherit" c="white">Streamify Analytics</Title>
        </Flex>
      </Card>

      <ActionIcon variant="transparent" size="xl" mb={10}
        component={Link} href={"/"} hiddenFrom="xl" aria-label="Streamify Analytics">
        <Image
          src="/streamify.png"
          alt="Logo"
          width={40}
          height={40}
        />
      </ActionIcon>
    </>
  );
};

export default Logo;
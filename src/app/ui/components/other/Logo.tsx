import { Card, Flex, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import classes from "./Logo.module.css";


const Logo = () => {
  return (
    <Card className={classes.logo} component={Link} href="/" withBorder p={25}>
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
  );
};

export default Logo;
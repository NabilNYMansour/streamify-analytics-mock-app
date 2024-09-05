import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from './error.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>404</div>
        <Title ff="inherit" className={classes.title}>Nothing to see here</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support.
        </Text>
        <Group justify="center">
          <Link key="Home" href="/" className={classes.link}>
            <Button
              style={{ transition: "all 0.2s" }}
              size="md">
              Take me back to home page
            </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
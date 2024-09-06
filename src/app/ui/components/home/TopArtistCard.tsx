"use client";

import { Card, Flex, Skeleton, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import Image from "next/image";

const TopArtistCardSkeleton = () => {
  return <Card withBorder p={25} miw={250}>
    <Title order={2} fw={500} ff="inherit">Top Artist</Title>
    <Text size="lg" c="dimmed">Last 30 days</Text>
    <Skeleton mt={30} h="100%" />
  </Card>
}

const TopArtistCard = ({ title, subtitle, artistName, imgPath }:
  { title: string, subtitle: string, artistName: string, imgPath: string }) => {
  return (
    <Card withBorder p={25} miw={250}>
      <Title order={2} fw={500} ff="inherit">{title}</Title>
      <Text size="lg" c="dimmed">{subtitle}</Text>
      <Flex direction="column" gap={10}>
        <Text fz="h2" mt="xl">
          {artistName}
        </Text>
        <Image
          src={imgPath}
          alt={artistName}
          width={180}
          height={180}
          style={{ borderRadius: "var(--mantine-radius-md)" }}
        />
      </Flex>
    </Card>
  );
}

export default dynamic(() => Promise.resolve(TopArtistCard), {
  ssr: false,
  loading: () => <TopArtistCardSkeleton />
});
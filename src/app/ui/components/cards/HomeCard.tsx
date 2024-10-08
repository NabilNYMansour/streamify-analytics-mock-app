import { Card, NumberFormatter, Skeleton, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";

const HomeCardSkeleton = () => {
  return <Card withBorder p={25} miw={250}>
    <Skeleton><Title order={2} fw={500} ff="inherit">Loading</Title></Skeleton>
    <Skeleton visible={false}><Text size="lg" c="dimmed">&nbsp;</Text></Skeleton>
    <Skeleton><Text fz="h2" mt="xl">Loading...</Text></Skeleton>
  </Card>
}

const HomeCard = async ({ title, subtitle, value, suffix }:
  { title: string, subtitle: string, value: number, suffix?: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000)); // simulate loading

  return (
    <Card withBorder p={25} miw={250}>
      <Title order={2} fw={500} ff="inherit">{title}</Title>
      <Text size="lg" c="dimmed">{subtitle}</Text>
      <Text fz="h2" mt="xl">
        <NumberFormatter thousandSeparator value={value} suffix={suffix} />
      </Text>
    </Card>
  );
}

export default dynamic(() => Promise.resolve(HomeCard), {
  ssr: false,
  loading: () => <HomeCardSkeleton />
});
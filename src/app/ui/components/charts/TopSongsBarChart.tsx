"use client";

import { Top5Songs } from "@/lib/constants";
import { BarChart } from "@mantine/charts";
import { Card, Grid, Paper, Progress, Skeleton, Text, Title } from "@mantine/core";
import classes from "./charts.module.css";
import dynamic from "next/dynamic";


const TopSongsBarChartSkeleton = () => {
  return (
    <Card flex={1} withBorder p={25} miw={250} mih={273.89}>
      <Title order={2} fw={500} ff="inherit">Top 5 Songs</Title>
      <Text size="lg" c="dimmed" pb="lg">Last 30 days</Text>
      <Skeleton h={183} w={461} />
    </Card>
  );
}

const TopSongsBarChart = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1600)); // simulate server delay

  return (
    <Card flex={1} withBorder p={25} miw={250} mih={273.89}>
      <Title order={2} fw={500} ff="inherit">Top 5 Songs</Title>
      <Text size="lg" c="dimmed" pb="lg">Last 30 days</Text>
      <BarChart
        h="100%"
        className={classes.chart}
        data={Top5Songs}
        dataKey="song"
        series={[
          { name: 'streams', color: 'main.6' },
        ]}
        withXAxis={false}
      />
    </Card>
  );
};

export default dynamic(() => Promise.resolve(TopSongsBarChart), {
  ssr: false,
  loading: () => <TopSongsBarChartSkeleton />
});
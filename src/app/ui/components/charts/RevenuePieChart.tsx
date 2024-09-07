import { Card, Skeleton, Title } from '@mantine/core';
import { PieChart } from '@mantine/charts';
import React from 'react';
import classes from "./charts.module.css";
import { RevenueDistribution } from '@/lib/constants';
import dynamic from 'next/dynamic';

const RevenuePieChartSkeleton = () => {
  return <Card withBorder p={25} miw={250}>
    <Title order={2} fw={500} ff="inherit" pb="xl">Revenue</Title>
    <Skeleton height={200} w={200} />
  </Card>
}

const RevenuePieChart = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1300)); // simulate server delay

  return (
    <Card withBorder p={25} style={{ overflow: "visible" }} miw={250}>
      <Title order={2} fw={500} ff="inherit" pb="xl">Revenue</Title>
      <PieChart className={classes.chart}
        size={200}
        withTooltip tooltipDataSource="segment"
        data={RevenueDistribution}  mx="auto" />
    </Card>
  );
};

export default dynamic(() => Promise.resolve(RevenuePieChart), {
  ssr: false,
  loading: () => <RevenuePieChartSkeleton />
});
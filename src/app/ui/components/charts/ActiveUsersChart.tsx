import { ActiveUsers } from "@/lib/constants";
import { LineChart } from "@mantine/charts";
import { Card, Skeleton, Title } from "@mantine/core";
import classes from "./charts.module.css";
import dynamic from "next/dynamic";

const ActiveUsersChartSkeleton = () => {
  return <Card withBorder p={25} miw={250}>
    <Title order={2} fw={500} ff="inherit" pb="xl">Active users</Title>
    <Skeleton height={250} />
  </Card>
}

const ActiveUsersChart = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate loading

  return <Card withBorder p={25} miw={250}>
    <Title order={2} fw={500} ff="inherit" pb="xl">Active users</Title>
    <LineChart className={classes.chart}
      h={250}
      title="Active users"
      curveType="linear"
      data={ActiveUsers}
      dataKey="date"
      series={[
        { name: 'value', color: 'main' },
      ]}
    />
  </Card>
};

export default dynamic(() => Promise.resolve(ActiveUsersChart), {
  ssr: false,
  loading: () => <ActiveUsersChartSkeleton />
});
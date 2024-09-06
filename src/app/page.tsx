import { Flex, Title } from "@mantine/core";
import ActiveUsersChart from "./ui/components/charts/ActiveUsersChart";
import HomeCard from "./ui/components/cards/HomeCard";
import TopArtistCard from "./ui/components/cards/TopArtistCard";
import { activeUsers, flexGap, numberOfUsers, revenue, totalStreams } from "@/lib/constants";

// Using hardcoded values
export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate server delay
  return (
    <Flex direction="column" w="100%" align="center" style={{ overflowY: "auto" }} pr={25}>
      <Flex direction="column" gap={flexGap} wrap="wrap" pt={25} pb={25}>

        <Title order={1} ff="inherit" mt={10}>Home</Title>

        <Flex gap={flexGap} wrap="wrap" justify="center">
          <Flex gap={flexGap} direction="column" wrap="wrap">
            <Flex gap={flexGap} wrap="wrap" justify="center">
              <HomeCard title="Total users" subtitle="All time" value={numberOfUsers} />
              <HomeCard title="Active users" subtitle="Since September 2024" value={activeUsers} />
            </Flex>

            <Flex gap={flexGap} wrap="wrap" justify="center">
              <HomeCard title="Total streams" subtitle="Since September 2024" value={totalStreams} />
              <HomeCard title="Revenue" subtitle="Since September 2024" value={revenue} suffix=" CAD" />
            </Flex>
          </Flex>

          <TopArtistCard
            title="Top Artist" subtitle="Last 30 days"
            artistName="Taylor Swift" imgPath="/swift.jpg" />
        </Flex>

        <ActiveUsersChart />
      </Flex>
    </Flex>
  );
}

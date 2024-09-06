import { Flex, Title } from "@mantine/core";
import ActiveUsersChart from "./ui/components/home/ActiveUsersChart";
import HomeCard from "./ui/components/home/HomeCard";
import TopArtistCard from "./ui/components/home/TopArtistCard";

const gap = 15;

// Using hardcoded values
export default async function HomePage() {
  return (
    <Flex direction="column" w="100%" align="center" style={{ overflowY: "auto" }} pr={25}>
      <Flex direction="column" gap={gap} wrap="wrap" pt={25} pb={25}>

        <Title order={1} ff="inherit" mt={10}>Home</Title>

        <Flex gap={gap} wrap="wrap" justify="center">
          <Flex gap={gap} direction="column" wrap="wrap">
            <Flex gap={gap} wrap="wrap" justify="center">
              <HomeCard title="Total users" subtitle="All time" value={1000000} />

              <HomeCard title="Active users" subtitle="Since September 2024" value={750000} />
            </Flex>

            <Flex gap={gap} wrap="wrap" justify="center">
              <HomeCard title="Total streams" subtitle="Since September 2024" value={8000000} />

              <HomeCard title="Revenue" subtitle="Since September 2024" value={200000} />
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

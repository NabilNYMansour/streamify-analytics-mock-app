import { flexGap } from "@/lib/constants";
import { Flex, Title } from "@mantine/core";
import classes from "./page.module.css";

const Page = () => {
  return (
    <Flex direction="column" w="100%" align="center" style={{ overflowY: "auto" }} pr={25}>
      <Flex direction="column" gap={flexGap} wrap="wrap" pt={25} pb={25} maw={780} w="100%">
        <Title order={1} ff="inherit" mt={10}>Notes about this app</Title>
      </Flex>
      <Flex direction="column" maw={780} w="100%" className={classes.letter}>
        <p>
          Hi, Ayush
        </p>
        <p>
          This app is the demo for the streamify analytics dashboard as described in &nbsp;
          <a target="_blank" href="https://docs.google.com/document/d/1JLZk733vTGRoZn4fFjP0IkodMvVIMr4Vn_irDabEZgs/edit">
            the document for the job offer
          </a>.
        </p>
        <p>
          I took the liberty of using next.js even though the document asks for React
          since the job description mentions that you are looking for someone with next.js experience.
          <br />
          I hope that&apos;s okay.
        </p>
        <p>
          I generally use <a target="_blank" href="https://mantine.dev/">Mantine</a> for my UI components. Which you can see in this app.
          <br />
          Though I hardcoded the home page, I used <a target="_blank" href="https://orm.drizzle.team/">Drizzle</a> with sqlite for the database for users page.
          <br />
          And the deployment is done on my personal VPS on DigitalOcean. I know vercel is the preferred deployment platform for next.js apps, 
          but I generally like to have more control over my deployments (for example you cannot use sqlite with vercel).
        </p>
        <p>
          Oh, I also didn&apos;t create the filtering for songs since I couldn&apos;t find the right data to use in Kaggle, so
          instead I opted to use <a target="_blank" href="https://fakerjs.dev/">faker.js</a> to generate some data for users.
        </p>
        <p>
          I probably will send you the link for the github repo for this app in my submission,
          but I will add it <a target="_blank" href="https://github.com/NabilNYMansour/streamify-analytics-mock-app">
            here
          </a> as well for your convenience.
        </p>
        <p>
          The requirements for this app are very similar to a project I did a while ago for a friend of mine.
          In it I made a demo for pharmacy kijiji like app. You can see the demo <a target="_blank" href="https://offloadrx.nabilmansour.com/demo">
            here
          </a>.
          <br />
          And <a target="_blank" href="https://github.com/NabilNYMansour/OffloadRX-demo">
            this
          </a> is the github repo for that project
        </p>
        <p>
          If you are interested in seeing more of my work, you can check out my portfolio at <a target="_blank" href="https://nabilmansour.com">nabilMansour.com</a>.
        </p>
        <p>
          I hope you like the app. I certainly had fun making it, and I hope to hear from you soon.
        </p>
        <p>
          Best,
          <br />
          Nabil
        </p>
      </Flex>

    </Flex>
  );
};

export default Page;
import React from "react";
import "@mantine/core/styles.css";
// import '@mantine/charts/styles.css';
import { MantineProvider, ColorSchemeScript, Flex } from "@mantine/core";
import classes from "./home.module.css";
import cx from 'clsx';
import { theme } from "@/theme";
import { Metadata } from "next";
import { MAIN_URL } from "@/lib/constants";
import Navigation from "./ui/layout/Navigation";

import { Nunito } from 'next/font/google'
const font = Nunito({
  weight: "400",
  subsets: ["latin"],
})

const description = ""; // no need for this app
const title = "Streamify";
const author = "Nabil Mansour";
const keywords = "streamify, stream, music, video, audio, podcast, nabil, mansour";
const imageLink = ""; // no need for this app

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | " + title,
  },
  description: description,
  alternates: {
    canonical: `${MAIN_URL}`
  },
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    url: `${MAIN_URL}`,
    type: "website",
    images: [{ url: imageLink, alt: title, }],
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageLink],
  },
  authors: { name: author },
  creator: author,
  publisher: author,
  manifest: `${MAIN_URL}/manifest.json`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="shortcut icon" href={`/favicon.ico`} />
        <link rel="apple-touch-icon" href={`/favicon.ico`} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes" />
      </head>
      <body className={cx(classes.body, font.className)}>
        <MantineProvider defaultColorScheme="light" theme={theme}>
          <Flex h="100vh">
            <Navigation />
            <div className={classes.app}>
              {children}
            </div>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}

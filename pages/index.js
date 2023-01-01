import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import About from "../components/Cards/about";
import { Box, Card } from "@mui/material";
import OurDogs from "../components/Cards/ourdogs";

export default function Home(children) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box marginTop={5}>
        <About name={"About Us"} />
        <OurDogs name={"Our Doggos"} />
      </Box>
    </Layout>
  );
}

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import About from "../components/Cards/about";
import { Box } from "@mui/material";

export default function Home(children) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box marginTop={5}>
        <About name={"About Us"} />
      </Box>
    </Layout>
  );
}

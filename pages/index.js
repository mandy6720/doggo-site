import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import About from "../components/Cards/about";
import { Box } from "@mui/material";
import OurDogs from "../components/Cards/ourdogs";
import Blockquote from "../components/Blockquote.js";
import AvailablePups from "../components/Cards/available-pups";
import Contact from "../components/Cards/contact";
import Form from "../components/Form/";

export default function Home(children) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box marginTop={5}>
        <About name={"About Us"} />
        <Blockquote className="varsity" />
        <OurDogs name={"Our Doggos"} />
        <AvailablePups name={"Available Pups"} />
        <Contact name={"Contact Us!"} />
        <Form />
      </Box>
    </Layout>
  );
}

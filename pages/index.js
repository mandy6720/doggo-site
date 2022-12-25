import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import About from "../components/Cards/about"

export default function Home (children) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="container">
        <About />
      </section>
    </Layout>
  );
}

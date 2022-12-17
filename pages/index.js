import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home () {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="container">
      <h1 id="about">About Us</h1>
      <span> "Our goal as a professional breeder is simple, to deliver American Dobermans with the highest standard of quality to new 
      owners. In order to make such a commitment in raising pups for new homes, we made a promise. The promise made is to ensure that 
      with love and compassion, these pups will be properly raised. The responsibility of bringing fragile lives into the world is a 
      lifelong commitment from the Odremans. As we graduate a puppy from the litter to new families, we make it our MISSION to always 
      be a single solution resource to inform, guide, and teach new members of our family!"</span>
      </section>
    </Layout>
  );
}

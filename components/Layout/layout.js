import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import AppBar from "../AppBar";
import { Box } from "@mui/material";
import Footer from "../Footer";

const name = "Odreman's Dobermans";
export const siteTitle = "Odreman's Dobermans";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={`Information about ${siteTitle}`} />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header} />
        <AppBar />
        <Box className="hero-image">
          <Image
            src="/images/OdremansDobermansWhite1.png"
            width={300}
            height={300}
          />
        </Box>
        <main className="body">{children}</main>
      </div>
      <Box
        sx={{ height: "60px", width: "100vw", position: "absolute", bottom: 0 }}
      >
        <Footer />
      </Box>
    </>
  );
}

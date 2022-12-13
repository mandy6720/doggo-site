import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import AppBar from "../components/AppBar";
import { Box } from "@mui/material";

const name = "Odreman's Dobermans";
export const siteTitle = "Odreman's Dobermans";

export default function Layout({ children }) {
  return (
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
        <Box className="hero-image" >]
            <h1 className={`${utilStyles.heading2Xl} hero-text`}><Image
              priority
              src="/images/OdremansDobermansWhite1.png"
              className={`${utilStyles.borderCircle} hero-text`}
              sx-{...{left: null, top: null, right: null, bottom:null}}
              height={300}
              width={300}
              alt="Odreman's Dobermans Logo"
            /></h1>
            </Box>
          <main className="body-margins">{children}</main>
          </div>)}

import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import AppBar from "../components/AppBar/appbar";
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
        <Box className="hero-image">]
            <h1 className={utilStyles.heading2Xl} className="hero-text"><Image
            className="hero-text"
              priority
              src="/images/OdremansDobermansWhite1.png"
              className={utilStyles.borderCircle}
              height={400}
              width={400}
              alt="Odreman's Dobermans Logo"
            /></h1>
            </Box>
          <main>{children}</main>
          </div>)}

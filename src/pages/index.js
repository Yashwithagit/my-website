import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
// const fs = require("fs");
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    getReadmeFileData();
  }, []);

  const getReadmeFileData = () => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "_octo=GH1.1.2052129370.1699438329; logged_in=no"
    );

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://raw.githubusercontent.com/Yashwithagit/website-doc/master/docs/tutorial-basics/create-a-page.md",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        updateFile(result);
      })
      .catch((error) => console.error(error));
  };

  const updateFile = (result) => {
    // // Fetch the file and update its content
    // fetch(
    //   "https://api.github.com/repos/Yashwithagit/website-doc/master/docs/tutorial-basics/create-a-page.md",
    //   {
    //     method: "PUT",
    //     body: result,
    //   }
    // )
    //   .then(() => {
    //     console.log("File updated successfully");
    //   })
    //   .catch((error) => console.error("Error updating file:", error));
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

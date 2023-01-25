import Head from "next/head";
import React from "react";
import { Work_Sans } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import AppDnaStacks from "@/components/AppDnaStacks";
import useScrollPercentage from "@/hooks/useScrollPercentage";

const workSansFont = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <>
      <Head>
        <title>Get Started - App DNAsty</title>
        <meta
          name="description"
          content="Plug-N-Deploy feature suite to build your app DNAsty"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main ref={scrollRef} className={workSansFont.className}>
        <section className={styles.hero}>
          <h1>All apps in the world share the same DNA</h1>
          <h3>
            Think about infrastructure, notifications, social auth. There’s over
            70% overlap in functionality.
          </h3>
        </section>

        <AppDnaStacks scrollPercentage={scrollPercentage} />

        <section className={styles.claim}>
          <h2>Don’t reinvent the wheel every time you build a new app.</h2>
          <h4>
            Instead, focus on what makes your app unique. We did the heavy
            lifting for you already. Just plug into our pre-made feature-suite
            and kickstart your project.
          </h4>
        </section>
      </main>
    </>
  );
}

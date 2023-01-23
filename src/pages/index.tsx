import Head from "next/head";
import { Work_Sans, Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";
import BookingToolSvg from "../components/AppDnaStacks/BookingToolSvg";
import CarSharingSvg from "@/components/AppDnaStacks/CarsharingSvg";
import SocialPlatformSvg from "@/components/AppDnaStacks/SocialPlatformSvg";
import CrmToolSvg from "@/components/AppDnaStacks/CrmToolSvg";
import PeopleOsSvg from "@/components/AppDnaStacks/PeopleOsSvg";
import TelehealthSvg from "@/components/AppDnaStacks/TelehealthSvg";
import FoodDeliverySvg from "@/components/AppDnaStacks/FoodDeliverySvg";

const blockColors = ["orange", "blue", "violet", "green"] as const;
type BlockColorTuple = typeof blockColors;
type BlockColor = BlockColorTuple[number];

function isBlockColor(value: string): value is BlockColor {
  return blockColors.includes(value as BlockColor);
}

const workSansFont = Work_Sans({ subsets: ["latin"] });
const robotoFont = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [highlightColor, setHighlightColor] = useState<BlockColor | undefined>(
    undefined
  );

  useEffect(() => {
    const querySelector = "rect"; // `${styles.dnaStack} rect`;
    const coloredBlocks = document.querySelectorAll(querySelector); // refector with useRef

    coloredBlocks.forEach((el) => {
      const colorClass = el.classList[0]; // assumes only one class on <rect />!

      if (isBlockColor(colorClass)) {
        el.addEventListener("mouseover", () => setHighlightColor(colorClass));
        el.addEventListener("mouseout", () => setHighlightColor(undefined));
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Build your App DNAsty</title>
        <meta
          name="description"
          content="Don’t reinvent the wheel every time you build a new app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${workSansFont.className} ${styles.main}`}>
        <section className={styles.hero}>
          <h1>All apps in the world share the same DNA</h1>
          <h3>
            Think about infrastructure, notifications, social auth. There’s over
            70% overlap in functionality.
          </h3>
        </section>

        <div
          className={`${robotoFont.className} ${styles.dnaStacks} ${
            highlightColor && styles[`highlightColor--${highlightColor}`]
          }`}
        >
          <div className={styles.dnaStack}>
            <span className={`color-orange ${styles.coloredLabel}`}>
              User Interface
            </span>
            <CrmToolSvg />
            <span className={styles.stackLabel}>CRM Tool</span>
          </div>

          <div className={styles.dnaStack}>
            <PeopleOsSvg />
            <span className={styles.stackLabel}>People OS</span>
          </div>

          <div className={styles.dnaStack}>
            <BookingToolSvg />
            <span className={styles.stackLabel}>Booking Tool</span>
            <span className={`color-green ${styles.coloredLabel}`}>
              Infrastructure
            </span>
          </div>

          <div className={styles.dnaStack}>
            <TelehealthSvg />
            <span className={styles.stackLabel}>Telehealth</span>
          </div>

          <div className={styles.dnaStack}>
            <span className={`color-blue ${styles.coloredLabel}`}>
              Basic Features
            </span>
            <FoodDeliverySvg />
            <span className={styles.stackLabel}>Food Delivery</span>
          </div>

          <div className={styles.dnaStack}>
            <SocialPlatformSvg />
            <span className={styles.stackLabel}>Social Platform</span>
            <span className={`color-violet ${styles.coloredLabel}`}>
              3rd party stuff
            </span>
          </div>

          <div className={styles.dnaStack}>
            <CarSharingSvg />
            <span className={styles.stackLabel}>Carsharing</span>
          </div>
        </div>

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

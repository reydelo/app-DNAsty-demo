import Head from "next/head";
import { Work_Sans, Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import BookingToolSvg from "../components/AppDnaStacks/BookingToolSvg";
import CarSharingSvg from "@/components/AppDnaStacks/CarsharingSvg";
import SocialPlatformSvg from "@/components/AppDnaStacks/SocialPlatformSvg";
import CrmToolSvg from "@/components/AppDnaStacks/CrmToolSvg";
import PeopleOsSvg from "@/components/AppDnaStacks/PeopleOsSvg";
import TelehealthSvg from "@/components/AppDnaStacks/TelehealthSvg";
import FoodDeliverySvg from "@/components/AppDnaStacks/FoodDeliverySvg";

const workSansFont = Work_Sans({ subsets: ["latin"] });
const robotoFont = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [stackLabelVisible, setStackLabelVisible] = useState(true);
  const toggleStackLabelVisibility = () =>
    setStackLabelVisible(!stackLabelVisible);

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

        <div className={`${robotoFont.className} ${styles.dnaStacks}`}>
          <div className={styles.dnaStack}>
            <span
              className={`color-orange ${styles.coloredLabel} ${
                !stackLabelVisible && styles.showColoredLabel
              }`}
            >
              User Interface
            </span>
            <CrmToolSvg
              onMouseEnter={toggleStackLabelVisibility}
              onMouseLeave={toggleStackLabelVisibility}
            />
            <span
              className={`${styles.stackLabel} ${
                !stackLabelVisible && styles.hideStackLabel
              }`}
            >
              CRM Tool
            </span>
          </div>

          <div className={styles.dnaStack}>
            <PeopleOsSvg />
            <span
              className={`${styles.stackLabel} ${
                !stackLabelVisible && styles.hideStackLabel
              }`}
            >
              People OS
            </span>
          </div>

          <div className={styles.dnaStack}>
            <BookingToolSvg />
            <span
              className={`${styles.stackLabel} ${
                !stackLabelVisible && styles.hideStackLabel
              }`}
            >
              Booking Tool
            </span>
            <span
              className={`color-green ${styles.coloredLabel} ${
                !stackLabelVisible && styles.showColoredLabel
              }`}
            >
              Infrastructure
            </span>
          </div>

          <div className={styles.dnaStack}>
            <TelehealthSvg />
            <span
              className={`${styles.stackLabel} ${
                !stackLabelVisible && styles.hideStackLabel
              }`}
            >
              Telehealth
            </span>
          </div>

          <div className={styles.dnaStack}>
            <span
              className={`color-blue ${styles.coloredLabel} ${
                !stackLabelVisible && styles.showColoredLabel
              }`}
            >
              Basic Features
            </span>
            <FoodDeliverySvg />
            <span
              className={`${styles.stackLabel} ${
                !stackLabelVisible && styles.hideStackLabel
              }`}
            >
              Food Delivery
            </span>
          </div>

          <div className={styles.dnaStack}>
            <SocialPlatformSvg />
            <span
              className={`${styles.stackLabel} ${
                !stackLabelVisible && styles.hideStackLabel
              }`}
            >
              Social Platform
            </span>
            <span
              className={`color-violet ${styles.coloredLabel} ${
                !stackLabelVisible && styles.showColoredLabel
              }`}
            >
              3rd party stuff
            </span>
          </div>

          <div className={styles.dnaStack}>
            <CarSharingSvg />
            <span
              className={`${styles.stackLabel} ${
                !stackLabelVisible && styles.hideStackLabel
              }`}
            >
              Carsharing
            </span>
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

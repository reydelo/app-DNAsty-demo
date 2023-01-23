import Head from "next/head";
import Image from "next/image";
import { Work_Sans, Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const workSansFont = Work_Sans({ subsets: ["latin"] });
const robotoFont = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
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
            <span className={`color-orange ${styles.coloredLabel}`}>
              User Interface
            </span>
            <Image
              src="/dna-stacks/crm-tool.svg"
              alt="CRM Tool technical stack"
              width={120}
              height={264}
            />
            <span className={styles.stackLabel}>CRM Tool</span>
          </div>

          <div className={styles.dnaStack}>
            <Image
              src="/dna-stacks/people-os.svg"
              alt="People OS technical stack"
              width={120}
              height={356}
            />
            <span className={styles.stackLabel}>People OS</span>
          </div>

          <div className={styles.dnaStack}>
            <span className={`color-green ${styles.coloredLabel}`}>
              Infrastructure
            </span>
            <Image
              src="/dna-stacks/booking-tool.svg"
              alt="Booking Tool technical stack"
              width={120}
              height={272}
            />
            <span className={styles.stackLabel}>Booking Tool</span>
          </div>

          <div className={styles.dnaStack}>
            <Image
              src="/dna-stacks/telehealth.svg"
              alt="Telehealth technical stack"
              width={120}
              height={352}
            />
            <span className={styles.stackLabel}>Telehealth</span>
          </div>

          <div className={styles.dnaStack}>
            <span className={`color-blue ${styles.coloredLabel}`}>
              Basic Features
            </span>
            <Image
              src="/dna-stacks/food-delivery.svg"
              alt="Food Delivery technical stack"
              width={120}
              height={252}
            />
            <span className={styles.stackLabel}>Food Delivery</span>
          </div>

          <div className={styles.dnaStack}>
            <span className={`color-violet ${styles.coloredLabel}`}>
              3rd party stuff
            </span>
            <Image
              src="/dna-stacks/social-platform.svg"
              alt="Social Platform technical stack"
              width={120}
              height={268}
            />
            <span className={styles.stackLabel}>Social Platform</span>
          </div>

          <div className={styles.dnaStack}>
            <Image
              src="/dna-stacks/carsharing.svg"
              alt="Carsharing technical stack"
              width={120}
              height={276}
            />
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

import React, { useState } from "react";
import styles from "@/styles/AppDnaStacks.module.css";
import BookingToolSvg from "../components/AppDnaStacks/BookingToolSvg";
import CarSharingSvg from "@/components/AppDnaStacks/CarsharingSvg";
import SocialPlatformSvg from "@/components/AppDnaStacks/SocialPlatformSvg";
import CrmToolSvg from "@/components/AppDnaStacks/CrmToolSvg";
import PeopleOsSvg from "@/components/AppDnaStacks/PeopleOsSvg";
import TelehealthSvg from "@/components/AppDnaStacks/TelehealthSvg";
import FoodDeliverySvg from "@/components/AppDnaStacks/FoodDeliverySvg";

import { Roboto } from "@next/font/google";

const robotoFont = Roboto({ weight: "400", subsets: ["latin"] });

const blockColors = ["orange", "blue", "violet", "green"] as const;
type BlockColorTuple = typeof blockColors;
type BlockColor = BlockColorTuple[number];

function isBlockColor(value: string): value is BlockColor {
  return blockColors.includes(value as BlockColor);
}

export default function AppDnaStacks() {
  const [highlightColor, setHighlightColor] = useState<BlockColor | undefined>(
    undefined
  );

  const highlightBlocks = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as Element;
    const colorClass = target.classList[0];
    if (isBlockColor(colorClass)) {
      setHighlightColor(colorClass);
    }
  };
  return (
    <div
      onMouseOver={highlightBlocks}
      className={`${robotoFont.className} ${styles.dnaStacks} ${
        highlightColor && styles[`highlightColor--${highlightColor}`]
      }`}
    >
      <div className={styles.dnaStack}>
        <span className={`${styles.orange} ${styles.coloredLabel}`}>
          User Interface
        </span>
        <CrmToolSvg onMouseLeave={() => setHighlightColor(undefined)} />

        <span className={styles.stackLabel}>CRM Tool</span>
      </div>

      <div className={styles.dnaStack}>
        <PeopleOsSvg onMouseLeave={() => setHighlightColor(undefined)} />
        <span className={styles.stackLabel}>People OS</span>
      </div>

      <div className={styles.dnaStack}>
        <BookingToolSvg onMouseLeave={() => setHighlightColor(undefined)} />
        <span className={styles.stackLabel}>Booking Tool</span>
        <span className={`${styles.green} ${styles.coloredLabel}`}>
          Infrastructure
        </span>
      </div>

      <div className={styles.dnaStack}>
        <TelehealthSvg onMouseLeave={() => setHighlightColor(undefined)} />
        <span className={styles.stackLabel}>Telehealth</span>
      </div>

      <div className={styles.dnaStack}>
        <span className={`${styles.blue} ${styles.coloredLabel}`}>
          Basic Features
        </span>
        <FoodDeliverySvg onMouseLeave={() => setHighlightColor(undefined)} />
        <span className={styles.stackLabel}>Food Delivery</span>
      </div>

      <div className={styles.dnaStack}>
        <SocialPlatformSvg onMouseLeave={() => setHighlightColor(undefined)} />
        <span className={styles.stackLabel}>Social Platform</span>
        <span className={`${styles.violet} ${styles.coloredLabel}`}>
          3rd party stuff
        </span>
      </div>

      <div className={styles.dnaStack}>
        <CarSharingSvg onMouseLeave={() => setHighlightColor(undefined)} />
        <span className={styles.stackLabel}>Carsharing</span>
      </div>
    </div>
  );
}

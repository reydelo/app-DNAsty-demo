import React, { useState } from "react";
import classNames from "classnames";
import { appStacks, dnaLabels, DnaLabel } from "./data";

import styles from "@/styles/AppDnaStacks.module.css";

import { Roboto } from "@next/font/google";

const robotoFont = Roboto({ weight: "400", subsets: ["latin"] });

const blockColors = ["orange", "blue", "violet", "green"] as const;
type BlockColorTuple = typeof blockColors;
export type BlockColor = BlockColorTuple[number];

function isBlockColor(value: string): value is BlockColor {
  return blockColors.includes(value as BlockColor);
}

type AppDnaStacksProps = {
  scrollPercentage: number;
};

export default function AppDnaStacks({ scrollPercentage }: AppDnaStacksProps) {
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

  const scrollAsDecimal = (100 - scrollPercentage) / 100;

  const renderDnaLabel = ({ label, color, position }: DnaLabel) => (
    <span
      className={classNames(styles[color], styles.dnaLabel, styles[position])}
    >
      {label}
    </span>
  );

  return (
    <div
      onMouseOver={highlightBlocks}
      className={classNames(robotoFont.className, styles.dnaStacks, {
        [`${styles[`highlightColor--${highlightColor}`]}`]: highlightColor,
      })}
    >
      {appStacks.map(({ stackLabel, offset, SvgComponent }, index) => (
        <div
          key={stackLabel}
          className={classNames(styles.dnaStack, {
            [styles.offset]: offset,
          })}
        >
          {dnaLabels[index] && renderDnaLabel(dnaLabels[index])}
          <SvgComponent
            onMouseLeave={() => setHighlightColor(undefined)}
            style={
              offset
                ? {
                    transform: `translate(0, calc(${offset}rem * ${scrollAsDecimal}))`,
                  }
                : {}
            }
          />
          <span
            className={classNames(styles.stackLabel, {
              [styles.hideLabel]: offset && offset * scrollAsDecimal > 1,
            })}
          >
            {stackLabel}
          </span>
        </div>
      ))}
    </div>
  );
}

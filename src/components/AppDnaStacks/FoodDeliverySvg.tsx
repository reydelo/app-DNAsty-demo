import { SVGProps } from "react";

const FoodDeliverySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={296}
    fill="none"
    {...props}
  >
    <g className="food-delivery">
      <rect
        width={120}
        height={12}
        y={284}
        fill="#45E3BE"
        className="green"
        rx={2}
      />
      <rect
        width={120}
        height={12}
        y={144}
        fill="#2FBDEA"
        className="blue"
        opacity={0.8}
        rx={2}
      />
      <rect
        width={120}
        height={84}
        y={180.004}
        fill="#8D65FF"
        className="violet"
        rx={2}
      />
      <rect
        width={120}
        height={76}
        y={48}
        fill="#2FBDEA"
        className="blue"
        opacity={0.2}
        rx={2}
      />
      <rect
        width={120}
        height={32}
        fill="#2FBDEA"
        className="blue"
        opacity={0.8}
        rx={2}
      />
    </g>
  </svg>
);

export default FoodDeliverySvg;

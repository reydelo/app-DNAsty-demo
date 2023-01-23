import { SVGProps } from "react";

const BookingToolSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={424}
    fill="none"
    {...props}
  >
    <g className="booking-tool">
      <rect
        width={120}
        height={52}
        y={300}
        fill="#8D65FF"
        className="violet"
        rx={2}
      />
      <rect
        width={120}
        height={48}
        y={376}
        fill="#45E3BE"
        className="green"
        rx={2}
      />
      <rect
        width={120}
        height={12}
        y={128}
        fill="#2FBDEA"
        className="blue"
        opacity={0.8}
        rx={2}
      />
      <rect
        width={120}
        height={36}
        y={248}
        fill="#2FBDEA"
        className="blue"
        opacity={0.4}
        rx={2}
      />
      <rect
        width={120}
        height={16}
        y={156}
        fill="#2FBDEA"
        className="blue"
        opacity={0.3}
        rx={2}
      />
      <rect
        width={120}
        height={36}
        y={188}
        fill="#FFBB56"
        className="orange"
        rx={2}
      />
      <rect
        width={120}
        height={104}
        fill="#2FBDEA"
        className="blue"
        opacity={0.8}
        rx={2}
      />
    </g>
  </svg>
);

export default BookingToolSvg;
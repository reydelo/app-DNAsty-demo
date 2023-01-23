import { SVGProps } from "react";

const CrmToolSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={376}
    fill="none"
    {...props}
  >
    <g className="crm-tool">
      <rect
        width={120}
        height={76}
        y={300}
        fill="#45E3BE"
        className="green"
        rx={2}
      />
      <rect
        width={120}
        height={12}
        y={56}
        fill="#2FBDEA"
        className="blue"
        opacity={0.3}
        rx={2}
      />
      <rect
        width={120}
        height={12}
        y={168}
        fill="#2FBDEA"
        className="blue"
        opacity={0.3}
        rx={2}
      />
      <rect
        width={120}
        height={12}
        y={192}
        fill="#2FBDEA"
        className="blue"
        opacity={0.8}
        rx={2}
      />
      <rect
        width={120}
        height={52}
        y={100}
        fill="#8D65FF"
        className="violet"
        rx={2}
      />
      <rect
        width={120}
        height={56}
        y={220}
        fill="#FFBB56"
        className="orange"
        rx={2}
      />
      <rect
        width={120}
        height={36}
        fill="#2FBDEA"
        className="blue"
        opacity={0.8}
        rx={2}
      />
    </g>
  </svg>
);

export default CrmToolSvg;
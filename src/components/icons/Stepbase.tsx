import * as React from "react";

const StepBaseIcon: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <g clipPath="url(#b)">
        <rect width={24} height={24} x={4.5} y={4} fill="#F4F3FF" rx={12} />
        <rect
          width={22.5}
          height={22.5}
          x={5.25}
          y={4.75}
          fill="#F4F3FF"
          rx={11.25}
        />
        <rect
          width={22.5}
          height={22.5}
          x={5.25}
          y={4.75}
          stroke="currentColor"
          strokeWidth={1.5}
          rx={11.25}
        />
        <circle cx={16.5} cy={16} r={4} fill="currentColor" />
      </g>
    </g>
    <defs>
      <clipPath id="b">
        <rect width={24} height={24} x={4.5} y={4} fill="#fff" rx={12} />
      </clipPath>
      <filter
        id="a"
        width={32}
        height={32}
        x={0.5}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_dropShadow_1_7144"
        />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0.96 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_7144" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_7144"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default StepBaseIcon;

import * as React from "react";

const StepcheckIcon: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <rect width={24} height={24} x={0.5} fill="#F4F3FF" rx={12} />
      <rect
        width={22.5}
        height={22.5}
        x={1.25}
        y={0.75}
        stroke="#6938EF"
        strokeWidth={1.5}
        rx={11.25}
      />
      <path
        fill="#6938EF"
        fillRule="evenodd"
        d="m17.596 7.39-7.16 6.91-1.9-2.03c-.35-.33-.9-.35-1.3-.07-.39.29-.5.8-.26 1.21l2.25 3.66c.22.34.6.55 1.03.55.41 0 .8-.21 1.02-.55.36-.47 7.23-8.66 7.23-8.66.9-.92-.19-1.73-.91-1.03v.01Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={24} height={24} x={0.5} fill="#fff" rx={12} />
      </clipPath>
    </defs>
  </svg>
);
export default StepcheckIcon;

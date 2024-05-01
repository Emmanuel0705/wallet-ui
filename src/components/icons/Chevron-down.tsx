import * as React from "react";

const ChevronDown: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#26272B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m5 8.201 5 5 5-5"
    />
  </svg>
);
export default ChevronDown;

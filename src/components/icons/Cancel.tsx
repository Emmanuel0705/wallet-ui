import * as React from "react";

const CancelIcon: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#7A5AF8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="m13.344 5.951-7.5 7.5m0-7.5 7.5 7.5"
    />
  </svg>
);
export default CancelIcon;

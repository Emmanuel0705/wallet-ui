import * as React from "react";

const StakingIcon: React.FC<React.SVGProps<any>> = (props) => (
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
      strokeWidth={1.67}
      d="M16.667 4.868c0 1.38-2.985 2.5-6.667 2.5s-6.667-1.12-6.667-2.5m13.334 0c0-1.38-2.985-2.5-6.667-2.5s-6.667 1.12-6.667 2.5m13.334 0v11.667c0 1.38-2.985 2.5-6.667 2.5s-6.667-1.12-6.667-2.5V4.868m13.334 3.889c0 1.38-2.985 2.5-6.667 2.5s-6.667-1.12-6.667-2.5m13.334 3.886c0 1.38-2.985 2.5-6.667 2.5s-6.667-1.12-6.667-2.5"
    />
  </svg>
);
export default StakingIcon;

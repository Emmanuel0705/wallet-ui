import * as React from "react";

const MintIcon: React.FC<React.SVGProps<any>> = (props) => (
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
      d="M14.898 17.443a8.333 8.333 0 0 1-9.796 0m8.551-14.231a8.333 8.333 0 0 1 4.6 8.65m-16.505 0a8.334 8.334 0 0 1 4.599-8.65m8.236 7.49a4.583 4.583 0 1 1-9.166 0 4.583 4.583 0 0 1 9.166 0Z"
    />
  </svg>
);
export default MintIcon;

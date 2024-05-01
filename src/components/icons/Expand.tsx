import * as React from "react";

const ExpandIcon: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.33}
      d="M14 9.333V10.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C12.48 14 11.92 14 10.8 14H9.333M6.667 2H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2v1.467M10 6l4-4m0 0h-4m4 0v4m-8 4-4 4m0 0h4m-4 0v-4"
    />
  </svg>
);
export default ExpandIcon;

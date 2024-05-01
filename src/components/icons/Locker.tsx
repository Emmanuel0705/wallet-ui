import * as React from "react";

const LockerIcon: React.FC<React.SVGProps<any>> = (props) => (
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
      d="M14.167 9.868v-2.5a4.167 4.167 0 0 0-8.334 0v2.5m1.5 8.333h5.334c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.092-1.093c.273-.534.273-1.234.273-2.635v-.333c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.535-.273-1.235-.273-2.635-.273H7.333c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.092 1.092c-.273.535-.273 1.235-.273 2.635v.333c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.093c.535.272 1.235.272 2.635.272Z"
    />
  </svg>
);
export default LockerIcon;

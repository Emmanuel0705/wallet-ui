import * as React from "react";

const SenderIcon: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#6938EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="m8.75 11.951 8.75-8.75m-8.644 9.024 2.19 5.632c.193.496.29.744.428.816.12.063.264.063.385 0 .139-.072.236-.32.43-.816L17.78 3.784c.175-.448.262-.671.214-.814a.417.417 0 0 0-.263-.264c-.143-.047-.367.04-.814.215L2.844 8.413c-.496.193-.744.29-.816.429a.417.417 0 0 0 0 .385c.072.139.32.235.816.428l5.632 2.19a.9.9 0 0 1 .194.09c.037.026.07.059.097.096.03.043.05.093.089.194Z"
    />
  </svg>
);
export default SenderIcon;

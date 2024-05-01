import * as React from "react";

const MainnetIcon: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <rect width={20} height={20} fill="#714EFF" rx={10} />
    <path
      fill="#fff"
      d="M5.035 7.14v5.72H2.54V8.585L5.035 7.14ZM5.035 12.86 10 15.714l-1.254 2.161-3.711-2.137V12.86ZM10 15.714l4.966-2.854 1.241 2.161-3.712 2.138L10 15.714ZM14.966 12.86V7.14h2.494v4.275l-2.494 1.445ZM14.966 7.14 10 4.287l1.242-2.162 3.724 2.137V7.14ZM10 4.287 5.036 7.14 3.795 4.98l3.71-2.137 2.496 1.445Z"
    />
  </svg>
);
export default MainnetIcon;

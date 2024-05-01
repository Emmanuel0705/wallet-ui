import * as React from "react";

const LauncherIcon: React.FC<React.SVGProps<any>> = (props) => (
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
      d="m10 13.201-2.5-2.5m2.5 2.5a18.63 18.63 0 0 0 3.333-1.666M10 13.2v4.167s2.525-.458 3.333-1.666c.9-1.35 0-4.167 0-4.167M7.5 10.7A18.331 18.331 0 0 1 9.167 7.41a10.733 10.733 0 0 1 9.166-5.042c0 2.267-.65 6.25-5 9.167M7.5 10.7H3.333S3.792 8.176 5 7.368c1.35-.9 4.167 0 4.167 0M3.75 14.451c-1.25 1.05-1.667 4.167-1.667 4.167s3.117-.416 4.167-1.666c.592-.7.583-1.776-.075-2.426a1.817 1.817 0 0 0-2.425-.075Z"
    />
  </svg>
);
export default LauncherIcon;

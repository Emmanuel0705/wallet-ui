import * as React from "react";

const EnvelopeIcon: React.FC<React.SVGProps<any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m2.167 6.535 6.804 4.763c.55.385.826.578 1.126.653.265.066.542.066.806 0 .3-.075.575-.268 1.126-.653l6.804-4.763M6.167 17.368h8.666c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.093-1.093c.272-.535.272-1.235.272-2.635V8.035c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093c-.534-.272-1.235-.272-2.635-.272H6.167c-1.4 0-2.1 0-2.635.272A2.5 2.5 0 0 0 2.439 5.4c-.272.535-.272 1.235-.272 2.635v5.333c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272Z"
    />
  </svg>
);
export default EnvelopeIcon;

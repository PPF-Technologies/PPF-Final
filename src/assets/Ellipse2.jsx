import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={1000}
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1={0.086} x2={0.732} y1={0.344} y2={1.011}>
        <stop offset="0%" stopColor="#D8E6EF" />
        <stop offset="8.571%" stopColor="#D8E6EF" />
        <stop offset="47.857%" stopColor="#B4D8E4" />
      </linearGradient>
    </defs>
    <ellipse cx={729} cy={743.5} fill="url(#a)" rx={729} ry={743.5} />
  </svg>
)
export default SvgComponent

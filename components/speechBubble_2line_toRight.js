import * as React from "react"
const SpeechBubble_2line_toRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={302}
    height={89}
    fill="none"
    {...props}
  >
    <g fill="#fff" filter="url(#a)">
      <rect width={268} height={61} x={16} y={12} rx={16} />
      <path d="m277.03 31.88 19.476 9.95-19.105 11.917-.371-21.867Z" />
    </g>
    <defs>
      <filter
        id="a"
        width={309.291}
        height={89}
        x={-4}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_616_2941"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_616_2941"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SpeechBubble_2line_toRight

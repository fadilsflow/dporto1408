export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 200 810 450"
      width="64"
      height="36"
      {...props}
    >
      <g transform="translate(8.7789 629.89)">
        <path d="m84.156-168.31v168.31h-84.156v-420.38h336.22v84.156h-252.06v83.75h252.06v84.156z" />
      </g>
      <g transform="translate(378.7 629.89)">
        <path d="m420.38-336.22v252.06h-84.156v84.156h-336.22v-420.38h336.22v84.156zm-336.22 252.06h251.23v-252.06h-251.23z" />
      </g>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  const fullSvg = `
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="${color}"
      viewBox="0 200 810 450"
      width="64"
      height="36"
    >
      <g transform="translate(8.7789 629.89)">
        <path d="m84.156-168.31v168.31h-84.156v-420.38h336.22v84.156h-252.06v83.75h252.06v84.156z" />
      </g>
      <g transform="translate(378.7 629.89)">
        <path d="m420.38-336.22v252.06h-84.156v84.156h-336.22v-420.38h336.22v84.156zm-336.22 252.06h251.23v-252.06h-251.23z" />
      </g>
    </svg>
  `;
  return fullSvg;
}

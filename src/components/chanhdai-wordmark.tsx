import React from "react";

export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 1572 790"
      {...props}
    >
      <g transform="translate(47 20)">
        <g>
          <g>
            <g transform="translate(.98032 544.67)">
              <path d="m57.328-114.66v114.66h-57.328v-286.34h229.02v57.328h-171.69v57.047h171.69v57.312z" />
            </g>
          </g>
          <g transform="translate(252.96 544.67)">
            <path d="m114.66-229.02v-57.328h57.031v57.328h57.328v114.36h57.328v114.66h-57.328v-57.328h-171.69v57.328h-57.328v-114.66h57.328v-114.36zm57.031 114.36v-113.8h-57.031v113.8z" />
          </g>
          <g transform="translate(562.27 544.67)">
            <path d="m286.34-229.02v171.69h-57.328v57.328h-229.02v-286.34h229.02v57.328zm-229.02 171.69h171.12v-171.69h-171.12z" />
          </g>
          <g transform="translate(871.58 544.67)">
            <path d="m0 0v-286.34h57.328v286.34z" />
          </g>
          <g transform="translate(951.86 544.67)">
            <path d="m0 0v-286.34h56.766v229.02h172.25v57.328z" />
          </g>
          <g transform="translate(1203.8 544.67)">
            <path d="m229.02-57.328v-57.328h-171.69v-57.312h-57.328v-57.047h57.328v57.047h171.69v57.312h57.328v57.328h-57.328v57.328h-229.02v-57.328zm-171.69-171.69v-57.328h229.02v57.328z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 1572 790"><g transform="translate(47 20)"><g><g><g transform="translate(.98032 544.67)"><path d="m57.328-114.66v114.66h-57.328v-286.34h229.02v57.328h-171.69v57.047h171.69v57.312z"/></g></g><g transform="translate(252.96 544.67)"><path d="m114.66-229.02v-57.328h57.031v57.328h57.328v114.36h57.328v114.66h-57.328v-57.328h-171.69v57.328h-57.328v-114.66h57.328v-114.36zm57.031 114.36v-113.8h-57.031v113.8z"/></g><g transform="translate(562.27 544.67)"><path d="m286.34-229.02v171.69h-57.328v57.328h-229.02v-286.34h229.02v57.328zm-229.02 171.69h171.12v-171.69h-171.12z"/></g><g transform="translate(871.58 544.67)"><path d="m0 0v-286.34h57.328v286.34z"/></g><g transform="translate(951.86 544.67)"><path d="m0 0v-286.34h56.766v229.02h172.25v57.328z"/></g><g transform="translate(1203.8 544.67)"><path d="m229.02-57.328v-57.328h-171.69v-57.312h-57.328v-57.047h57.328v57.047h171.69v57.312h57.328v57.328h-57.328v57.328h-229.02v-57.328zm-171.69-171.69v-57.328h229.02v57.328z"/></g></g></g></svg>`;
}

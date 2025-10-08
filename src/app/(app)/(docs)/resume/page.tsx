import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "A brief look at my skills, experience, and journey.",
};

export default function Page() {
  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Resume</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <iframe
          src="https://drive.google.com/file/d/1pPmMkBtYGP_LRZViUmC31xWCDqoZ5LG1/preview"
          allow="autoplay"
          className="h-[1000px] w-full"
        ></iframe>
      </div>

      <div className="h-4" />
    </>
  );
}

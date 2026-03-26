import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { build as viteBuild } from "vite";

const distIndexPath = path.resolve(process.cwd(), "dist", "index.html");
const ssrOutDir = path.resolve(process.cwd(), "dist", "ssr");
const ssrEntryPath = path.resolve(ssrOutDir, "entry-server.js");

async function prerenderHome() {
  await viteBuild({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: ssrOutDir,
      emptyOutDir: false,
      rollupOptions: {
        output: {
          entryFileNames: "entry-server.js",
        },
      },
    },
    logLevel: "error",
  });

  const ssrEntry = await import(pathToFileURL(ssrEntryPath).href);
  const render = ssrEntry.render;

  if (typeof render !== "function") {
    throw new Error("SSR entry does not export a render(url) function.");
  }

  const template = await readFile(distIndexPath, "utf8");
  const appHtml = render("/");
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  await writeFile(distIndexPath, html, "utf8");
  await rm(ssrOutDir, { recursive: true, force: true });

  console.log(`Prerender complete: ${distIndexPath}`);
}

prerenderHome().catch((error) => {
  console.error(error);
  process.exit(1);
});

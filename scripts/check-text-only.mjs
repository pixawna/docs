import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";

const output = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { encoding: "buffer" },
);
const files = output.toString("utf8").split("\0").filter(Boolean);
const decoder = new TextDecoder("utf-8", { fatal: true });
const binaryFiles = [];

for (const file of files) {
  if (!existsSync(file) || !statSync(file).isFile()) continue;
  const contents = readFileSync(file);
  try {
    decoder.decode(contents);
    if (contents.includes(0)) binaryFiles.push(file);
  } catch {
    binaryFiles.push(file);
  }
}

if (binaryFiles.length > 0) {
  console.error("Binary files are not allowed in this repository:");
  for (const file of binaryFiles) console.error(`- ${file}`);
  process.exit(1);
}

console.log(`Verified ${files.length} text-only files.`);

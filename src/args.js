import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// parse args and return an object about the config
export function args() {
  let foundDoubleDash = false;
  const args = [];
  const afterArgs = [];

  process.argv.slice(2).forEach((arg) => {
    if (arg === "--version" || arg === "-v") {
      return { showVersion: true };
    }

    if (arg === "--help" || arg === "-h") {
      return { showUsage: true };
    }

    if (arg === "--") {
      foundDoubleDash = true;
    } else if (foundDoubleDash) {
      afterArgs.push(arg);
    } else {
      args.push(arg);
    }

    return { args, afterArgs };
  });
}

export function packageVersion() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const packageJSON = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8")
  );

  return packageJSON.version;
}

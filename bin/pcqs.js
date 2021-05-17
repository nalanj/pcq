import { args, packageVersion } from "../src/args.js";

const options = args();

if (options.showVersion) {
  console.log(`pcqs ${packageVersion()}`);
  process.exit(0);
}

if (options.showUsage) {
  console.log("Usage: pcqs [scripts] [arguments]");
  console.log("");
  console.log("Options:");
  console.log("  --\t\t\tBegin positional arguments");
  console.log("  -h, --help\t\tPrint this usage message");
  console.log("  -v, --version\t\tPrint pcq version");

  console.log("");
  console.log("Environment variables:");
  console.log(
    "  DATABASE_URL\t\tURL specifying connection details for database"
  );

  console.log(" ");
}

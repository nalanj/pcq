import { args, packageVersion } from "../src/args.js";

const options = args();

console.log(options);
console.log(packageVersion());

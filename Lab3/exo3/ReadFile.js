import { readFileSync } from "node:fs";
const content = readFileSync("./Text.txt", "utf-8");
console.log(content);

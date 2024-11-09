import { writeFile} from "fs";

const filename = process.argv[2];
const text = process.argv[3];

writeFile(filename, text, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("The File has been saved!");
  }
});

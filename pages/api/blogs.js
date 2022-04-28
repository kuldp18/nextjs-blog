import * as fs from 'fs';

export default async function handler(req, res) {
  // read the directory
  let data = await fs.promises.readdir('blog-data');
  let allblogs = [];
  let myFile;

  // read each file in the dir and append the data into the allblogs array
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myFile = await fs.promises.readFile(`blog-data/${element}`, 'utf-8');
    allblogs.push(JSON.parse(myFile));
  }

  // send the all the blogs as a response
  res.status(200).json(allblogs);
}

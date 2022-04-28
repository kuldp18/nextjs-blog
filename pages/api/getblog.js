//http://localhost:3000/api/getblog?slug=learn-javascript-2022

import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile(`blog-data/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(404).json({ error: 'Blog not found.' });
    }
    const result = JSON.parse(data);
    res.status(200).json(result);
  });
}

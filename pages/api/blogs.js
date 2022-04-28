import * as fs from 'fs';

export default function handler(req, res) {
  fs.readdir('blog-data', (err, data) => {
    if (err) {
      res.status(404).json({ error: 'No blogs directory found.' });
    }
    res.status(200).json(data);
  });
}

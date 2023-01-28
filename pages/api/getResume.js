import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const cvDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(cvDirectory + '/adrian-ferrari-cv.pdf', 'utf8');
  res.status(200).sendFile(fileContents);
}
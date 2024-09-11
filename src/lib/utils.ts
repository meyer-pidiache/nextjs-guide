import fs from 'fs';
import path from 'path';

export function getCodeFromFile(filePath: string) {
  const fullPath = path.join(process.cwd(), 'src/app', filePath);
  const code = fs.readFileSync(fullPath, 'utf8');
  return code;
}

import { processImage } from '../../utils/utils';
import fs from 'fs';
import path from 'path';

describe('Test Image Processing Function', () => {
  it('Test create iamge', async () => {
    const basePath = `${__dirname}/../../../images`;
    const temp = `${basePath}/thumb/fjord-150-150.jpg`;

    const checkFile = (temp: string): boolean => {
      if (fs.existsSync(path.normalize(temp))) return true;

      return false;
    };

    return await processImage(basePath, 'fjord', 150, 150).then((result) => {
      console.log(result);
      expect(checkFile(temp)).toEqual(true);
    });
  });
});

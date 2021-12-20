import express from 'express';
import fs from 'fs';
import path from 'path';
import { processImage } from '../../utils/utils';

const basePath = `${__dirname}/../../../images`;

export const image = express.Router();

image.get('/', async (req, res) => {
  // console.log(req.query)
  const name = req.query.name as string;
  const hight = parseInt(req.query.hight as string);
  const width = parseInt(req.query.width as string);

  if (!name || !hight || !width) {
    res.status(400).send(`Required parameters is not provided`);
    return;
  }

  const temp = `${basePath}/thumb/${name}-${hight}-${width}.jpg`;
  // const newImage = __dirname+"/../../images/thumb/test.jpeg";
  // console.log(`original path to check ` + path.normalize(temp))

  if (fs.existsSync(path.normalize(temp))) {
    console.log(`image exist`);
    path.normalize(temp);
    res.type('image/jpeg').sendFile(path.normalize(temp));
    return;
  }

  if (!fs.existsSync(path.normalize(`${basePath}/${name}.jpg`))) {
    // console.log(path.normalize(`${basePath}/${name}.jpg`))
    return res.status(400).send(`Provided file name does not Exiest ${name}.jpg 
        please upload image first`);
  }

  await processImage(basePath, name, width, hight)
    .then((data) => {
      console.log(data);
      const newImage =
        __dirname + `/../../../images/thumb/${name}-${hight}-${width}.jpg`;
      // console.log(path.normalize(newImage));
      res.type('image/jpeg').sendFile(path.normalize(newImage));
    })
    .catch((err) => {
      // console.log("../images/thumb/test.jbg");
      res.status(400).send(`error processing image ${err}`);
    });
});

import express from 'express'
import fs from 'fs';
import sharp from 'sharp';

export const logger = (
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
): void => {
    console.log(req.query)

    next();
};

function checkIfDirExist(dir: string) {

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

export async function processImage(
    basePath: string,
    name: string,
    width: number,
    hight: number
) {
    checkIfDirExist(basePath + `/thumb`)
    return await sharp(`./images/${name}.jpg`)
        .resize(width, hight)
        .jpeg()
        .toFile(`./images/thumb/${name}-${hight}-${width}.jpg`)
}
import express from 'express'
import fs from 'fs';

export const logger = (
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
): void => {
    console.log(req.query)

    next();
};

export function checkIfDirExist(dir: string) {

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}


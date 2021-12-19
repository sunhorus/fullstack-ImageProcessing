import express from 'express';   
const routes = express.Router();

import sharp from 'sharp';

routes.get('/image', (req, res) => { 
    
    // req.params.filename;
    // req.params.width;
    // req.params.height;
    //do something 
    sharp("icelandwaterfall.jpg")
        .resize(200 , 200)
        .jpeg({})
        .toFile('./test.jbg')
        .then()
        .catch(err => {
            console.log(err);
        })

        res.send('/processing file');
});

export default routes;
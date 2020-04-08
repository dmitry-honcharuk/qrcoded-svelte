import sirv from 'sirv';
import express, { json } from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
  .use(
    json(),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware(),
  )
  .post('/test', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let json = JSON.stringify(req.body);
    res.end(json);
  })
  .listen(PORT, err => {
    if (err) {
      console.log('error', err);
    }
  });

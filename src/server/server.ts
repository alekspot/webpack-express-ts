import * as express from 'express';

const app = express();

if (process.env.NODE_ENV === 'dev') {
    const {devMiddleware, hotMiddleware} = require('./dev-server');
    app.use(devMiddleware);
    app.use(hotMiddleware);
}

app.use(express.static('dist'));

app.listen(3000, () => console.log('Start on http://localhost:3000'));
import * as webpack from 'webpack';
import * as WebpackDevMiddleware from 'webpack-dev-middleware';
import * as WebpackHotMiddleware from 'webpack-hot-middleware';
import * as config from '../../config/webpack.dev.js';

const compiler = webpack(config as webpack.Configuration);
export const devMiddleware = WebpackDevMiddleware(compiler, {});
export const hotMiddleware = WebpackHotMiddleware(compiler);
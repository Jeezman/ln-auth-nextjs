import express, { Application, Response, Request, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import { responseError } from './helpers';
import routes from './routes';
import 'dotenv/config';

const app: Application = express();
const server = http.createServer(app);

// App middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    responseError(res, 500, err.message);
  }
});

app.use('/', routes);

const io = require('socket.io')(server);
let emitSocketEvent: any;

io.on('connection', (socket: any) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('User Disconnect');
  });

  emitSocketEvent = socket;
});

export { emitSocketEvent };

export default server;

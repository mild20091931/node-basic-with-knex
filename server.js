import express from 'express';
import helmet from 'helmet';
import cors from './cors';
import bodyParser from 'body-parser';
import { listen } from 'socket.io';
import apiRoutes from './src/routes';

const port = 8000;

const app = express();
app.use(helmet());
app.use(cors);
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

//api of users
app.use('/api', apiRoutes);

const server = app.listen(port, () => console.log(`listening on port ${port}!`));

const io = listen(server);
app.io = io;
io.on('connection', socket => {
  console.log('socket connected');
  socket.on('room', room => {
    socket.join(room);
  });
});

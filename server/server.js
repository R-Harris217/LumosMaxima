require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const socketio = require('socket.io');
const cookieParser = require("cookie-parser");
const port = process.env.MY_PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

app.use(cookieParser());



require('./config/mongoose.config');

require('./routes/lights.routes')(app);
require('./routes/user.routes')(app);

const server = app.listen(port, () => console.log("Successfully connected on port " + port));

const io = socketio(server, {
  cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['*'],
      credentials: true,
  }
});

io.on("connection", (socket) => {
  console.log('Server side socket id: ' + socket.id);

  socket.on('added_new_light', (data) => {
    console.log("added_new_light");
    console.log(data);
    socket.broadcast.emit('added_light', data);
  });

  socket.on('deleted_light', (lightId) => {
    console.log("deleted_light");
    console.log(lightId);
    socket.broadcast.emit('light_deleted', lightId);
  });

});
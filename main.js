const express = require("express");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.use('/health', require("./router/health"));
app.use('/vote', require("./router/vote"));

const server = app.listen(50050, () => {
  console.log("Server Started! http://localhost:50050/")
})
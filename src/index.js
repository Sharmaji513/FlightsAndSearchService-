const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {

  //create the express
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
  
};

setupAndStartServer();

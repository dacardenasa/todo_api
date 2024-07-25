import express from "express";
import cors from "cors";

export class Server {
  app;
  port;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Midlewares
    this.middlewares();
    // App routes load
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Reading and body parsing
    this.app.use(express.json());
    // Public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/auth", require("../routes/auth"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }
};

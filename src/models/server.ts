import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";

import authRoutes from '@routes/auth';
import userRoutes from '@routes/user';
import taskRoutes from '@routes/task';
import specs from '@swagger/swagger';

import { connectMongoDB } from "@services/mongoDB";

export class Server {
  app;
  port;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Connect DB
    this.connectDB();
    // Midlewares
    this.middlewares();
    // App routes load
    this.loadRoutes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Reading and body parsing
    this.app.use(express.json());
    // Public directory
    this.app.use(express.static("public"));
    // Swagger docs
  }

  async connectDB() {
    await connectMongoDB();
  }

  loadRoutes() {
    this.app.use("/api/auth", authRoutes);
    this.app.use("/api/users", userRoutes);
    this.app.use("/api/tasks", taskRoutes);
    this.app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }
}

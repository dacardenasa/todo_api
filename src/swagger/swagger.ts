import { ENVIRONMENTS } from "@constants/index";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "todo API",
      version: "1.0.0",
      description: "API for managing todo",
      contact: {
        name: "Diego Cardenas"
      },
      servers: [
        {
          url:
            process.env.ENVIRONMENT === ENVIRONMENTS.DEVELOPMENT
              ? `${process.env.LOCAL_URI}:${process.env.PORT}`
              : process.env.SERVICE_URI,
          description: `${
            process.env.ENVIRONMENT === ENVIRONMENTS.DEVELOPMENT
              ? "Local"
              : "Production"
          } server`
        }
      ]
    }
  },
  apis: ["./src/swagger/*.yml"]
};

const specs = swaggerJsdoc(options);
export default specs;

import { Router } from "express";
import session from "../controllers/session";
import platformRouter from "./platform";
import serieRouter from "./series";
import usersRouter from "./users";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import favorites from "../controllers/favorites";
import auth from "../middleware/auth";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WatchMe API",
      version: "Entrega Final A31",
      description:
        "Documentação do WatchMe API para facilitar uso e apresentação do projeto! 🦆",
      contact: {
        name: "WatchMe",
      },
    },
  },
  apis: [`${__dirname}/*.ts`],
};

const specs = swaggerJsdoc(swaggerOptions);

const routes = Router();

routes.use("/api-docs", swaggerUi.serve);

routes.get("/api-docs", swaggerUi.setup(specs));

routes.use("/login", session.auth);

routes.use("/user", usersRouter);

routes.use("/platform", platformRouter);

routes.use("/serie", serieRouter);

routes.get("/favorites", auth.verify, favorites.getFavorites);

routes.post("/favorite/:serie_id", auth.verify, favorites.favorite);

routes.post("/unfavorite/:serie_id", auth.verify, favorites.unfavorite);

export default routes;

import { Router } from "express";
import serie from "../controllers/series";
import auth from "../middleware/auth";

const usersRouter = Router();

usersRouter.get("/:id", auth.verify, serie.getSerieDetailed);

usersRouter.get("/platform/:platform_id", auth.verify, serie.getAllOnPlatform);

usersRouter.post("/create", auth.verifyAdmin, serie.create);

usersRouter.put("/edit/:id", auth.verifyAdmin, serie.update);

usersRouter.delete("/delete/:id", auth.verifyAdmin, serie.remove);

export default usersRouter;

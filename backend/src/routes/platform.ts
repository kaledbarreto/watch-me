import { Router } from "express";
import platform from "../controllers/platform";
import auth from "../middleware/auth";

const usersRouter = Router();

usersRouter.get("/", auth.verify, platform.getAll);

usersRouter.post("/create", auth.verifyAdmin, platform.create);

usersRouter.put("/edit/:id", auth.verifyAdmin, platform.update);

usersRouter.delete("/delete/:id", auth.verifyAdmin, platform.remove);

export default usersRouter;

import { Router } from "express";
import platform from "../controllers/platform";
import series from "../controllers/series";
import auth from "../middleware/auth";

const platformRouter = Router();

platformRouter.get("/", auth.verify, platform.getAll);

platformRouter.get("/:platform_id", auth.verify, series.getAllOnPlatform);

platformRouter.post("/create", auth.verifyAdmin, platform.create);

platformRouter.put("/edit/:id", auth.verifyAdmin, platform.update);

platformRouter.delete("/delete/:id", auth.verifyAdmin, platform.remove);

export default platformRouter;

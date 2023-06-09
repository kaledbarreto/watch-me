import { Router } from "express";
import serie from "../controllers/series";
import auth from "../middleware/auth";

const seriesRouter = Router();

seriesRouter.get("/:id", auth.verify, serie.getSerieDetailed);

seriesRouter.post("/search", auth.verify, serie.search);

seriesRouter.get("/check_liked/:id", auth.verify, serie.checkSerieIsLiked);

seriesRouter.post("/create", auth.verifyAdmin, serie.create);

seriesRouter.put("/edit/:id", auth.verifyAdmin, serie.update);

seriesRouter.delete("/delete/:id", auth.verifyAdmin, serie.remove);

export default seriesRouter;

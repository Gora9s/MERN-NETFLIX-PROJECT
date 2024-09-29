import express from  "express";
import { getTrendingTvShows, getTvShowTrailers, getTvShowDetails, getSimilarTvShows, getTvShowsByCategory} from "../controllers/tvController.js"

const router  = express.Router();

router.get("/trending", getTrendingTvShows)
router.get("/:id/trailer", getTvShowTrailers)
router.get("/:id/details", getTvShowDetails)
router.get("/:id/similar", getSimilarTvShows)
router.get("/:category",getTvShowsByCategory)

export default router;

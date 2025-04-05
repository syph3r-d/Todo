import express from "express";
import v1_routes from "./v1";

const router = express.Router();

router.use("/api/v1", v1_routes);

export default router;

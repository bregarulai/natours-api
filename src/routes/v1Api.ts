import express from "express";

import toursRoute from "./tours/tours.route";

const router = express.Router();

router.use("/tours", toursRoute);

export default router;

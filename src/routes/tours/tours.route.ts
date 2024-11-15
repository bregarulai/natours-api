import express from "express";
import { httpCreateTour, httpGetAllTours } from "./tours.controller";

const router = express.Router();

router.route("/").get(httpGetAllTours).post(httpCreateTour);

export default router;

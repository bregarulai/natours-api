import express from "express";
import { httpGetAllTours } from "./tours.controller";

const router = express.Router();

router.route("/").get(httpGetAllTours);

export default router;

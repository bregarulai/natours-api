import { getAll } from "./handler.factory";
import { getAllTours } from "../models/tours/tours.model";

export const httpGetAllTours = getAll(getAllTours);

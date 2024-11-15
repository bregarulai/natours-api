import { createOne, getAll } from "../handler.factory";
import { createTour, getAllTours } from "../../models/tours/tours.model";

export const httpGetAllTours = getAll(getAllTours);
export const httpCreateTour = createOne(createTour);

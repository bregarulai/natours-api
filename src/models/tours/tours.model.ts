import Tour from "./tours.mongo";

export const getAllTours = async () => {
  try {
    const tours = await Tour.find({});
    return tours;
  } catch (error) {
    throw error;
  }
};

export const createTour = async (tour: any) => {
  try {
    const newTour = await Tour.create(tour);
    return newTour;
  } catch (error) {
    throw error;
  }
};

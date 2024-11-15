import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI!;

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB Connection Error. Please make sure MongoDB is running");
  console.error(err);
  process.exit(1);
});

export const mongoConnect = async () => {
  await mongoose.connect(mongoUri);
};

export const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

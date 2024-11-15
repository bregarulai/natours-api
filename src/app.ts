import express, { NextFunction, Request, Response } from "express";

import v1ApiRouter from "./routes/v1Api";
import globalErrorHandler from "./middlewares/errorHandler";
import AppError from "./lib/AppError";

const app = express();

app.use(express.json());

app.use("/api/v1", v1ApiRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;

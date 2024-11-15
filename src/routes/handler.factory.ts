import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../lib/catchAsync";

export const getAll = (modelFunction: Function) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const response = await modelFunction();

    res.status(200).json({
      status: "success",
      results: response.length,
      data: { data: response },
    });
  });

export const createOne = (modelFunction: Function) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const response = await modelFunction(req.body);

    res.status(200).json({
      status: "success",
      data: { data: response },
    });
  });

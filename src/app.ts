import express from "express";

import v1ApiRouter from "./routes/v1Api";

const app = express();

app.use(express.json());

app.use("/api/v1", v1ApiRouter);

export default app;

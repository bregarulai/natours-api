import http from "http";
import dotenv from "dotenv";

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.name} : ${err.message}`);
  console.log("UNCAUGHT EXCEPTION!  Shutting down server...");
  process.exit(1);
});

dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();

process.on("unhandledRejection", (err: any) => {
  console.error(`Unhandled Rejection: ${err.name} : ${err.message}`);
  console.log("UNHANDLED REJECTION!  Shutting down server...");

  server.close(() => {
    process.exit(1);
  });
});

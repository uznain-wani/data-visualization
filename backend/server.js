import express from "express";

import dotenv from "dotenv"; // stores confidential data to provide security

import connectDb from "./config/db.js"; //db connection

import DashboardRoutes from "./routes/dashboardRoutes.js";
import cors from "cors";

const app = express();
dotenv.config();
connectDb();
// app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/data", DashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV}  mode on port ${PORT}`
  )
);

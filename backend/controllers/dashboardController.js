import Dashboard from "../models/dashboardModel.js";

import expressHandler from "express-async-handler";

export const getDashboardData = expressHandler(async (req, res) => {
  const dashboardData = await Dashboard.find({});
  return res.status(200).json(dashboardData);
});

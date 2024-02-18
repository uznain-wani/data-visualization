import dotenv from "dotenv";
import Dashboard from "./models/dashboardModel.js";
import connectDB from "./config/db.js";
import Globaldata from "./data/Globaldata.js";

dotenv.config();

connectDB();
const importData = async () => {
  try {
    // clear everything  from dbase first
    await Dashboard.deleteMany();

    //now add new users from dummy data users.js into model Usermodel.js
    await Dashboard.insertMany(Globaldata);

    console.log("data imported sucessfully");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1); // 1 mean exit  with failure
  }
};
const destroytData = async () => {
  try {
    await Dashboard.deleteMany();

    console.log("data destroyed sucessfully");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

// we can  run this file by typing node backend/seeder -d or and it will destroy else without -d it will importdata
if (process.argv[2] === "-d") {
  destroytData();
} else {
  importData();
}

import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected To MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;

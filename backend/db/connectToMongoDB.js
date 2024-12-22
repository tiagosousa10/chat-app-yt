import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('connected to mongo!')
  } catch (e) {
    console.log('error connecting mongodb: ', e)
  }
}


export default connectToMongoDB;

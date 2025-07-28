import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;
if (!MONGO_URI) throw new Error("MONGO_URI is not defined in environment variables");
declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

global.mongoose = global.mongoose || { conn: null, promise: null };

export const connectDb = async (): Promise<Mongoose> => {
  if (global.mongoose.conn) return global.mongoose.conn;

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose
      .connect(MONGO_URI)
      .then((mongooseInstance) => {
        console.log("MongoDB connected");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("MongoDB connection failed", err);
        throw err;
      });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
};

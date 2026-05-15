import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    // Clean the URI - remove any trailing slashes or existing database name
    const baseURI = process.env.MONGO_URI.replace(/\/+$/, "").replace(/\/[^/]*$/, (match) => {
      // If the match looks like a database name (not the host), remove it
      return match.includes("mongodb") ? match : "";
    });

    const conn_str = `${baseURI}/timeAnalysisAndProductivity`;

    const conn = await mongoose.connect(conn_str, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
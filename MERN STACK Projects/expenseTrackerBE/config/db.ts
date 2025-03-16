import mongoose from "mongoose";

class connectDB {
  constructor(private url: string) {}
  connect = async (): Promise<void> => {
    try {
      await mongoose.connect(this.url);
      console.log(`Successfully connected Db to: ${process.env.ENVIRONMENT}`);
    } catch (e: any) {
      console.log(
        `Error While Connecting to DB: ${process.env.ENVIRONMENT}`,
        e.message
      );
    }
  };
}
export default connectDB;

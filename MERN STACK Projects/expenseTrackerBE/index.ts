import express from "express";
import userRoutes from "./Routes/usersRoutes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server Started Connected to: dev`);
});

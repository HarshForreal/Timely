import epxress from "express";
import cors from "cors";
import eventRoutes from "./routes/event.routes.js";

const app = epxress();

app.use(cors());
app.use(epxress.json());

app.use("/api/events", eventRoutes);
export default app;

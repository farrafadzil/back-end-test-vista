import express from "express"; // ES module
import cors from "cors";
import { setupSwagger } from "./swagger.js";
import companyRoutes from "./controllers/company.controllers.js";
import serviceRouter from "./controllers/services.controllers.js";
const app = express();
const PORT = 3005;
app.use(cors());
app.use(express.json());
// Swagger
setupSwagger(app);
// Routes
app.use("/companies", companyRoutes);
app.use("/services", serviceRouter);
app.get("/", (_req, res) => res.send("Vista API is Running"));
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});
//# sourceMappingURL=server.js.map
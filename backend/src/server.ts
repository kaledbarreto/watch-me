// import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

// app.use(cors);
app.use(express.json());

app.use(routes);

const port = 8000;

app.get("/", (req, res) => {
  res.send("🦆");
});

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () =>
  console.log(`Server is running http://localhost:${port} 🦆`)
);

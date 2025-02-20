import express, { Request, Response } from "express";
import cors from "cors"; // Для разрешения запросов с фронтенда

import tables from "./routes/tables";
import createDataSetings from "./routes/dateSettings";
import person from "./routes/person";

const app = express();
const port = 4000;

app.use(cors()); // Разрешаем все источники для простоты
app.use(express.json()); // Для парсинга JSON-тела запроса

app.use("/tables", tables);
app.use("/create-data", createDataSetings);
app.use("/person", person);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express backend!!!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

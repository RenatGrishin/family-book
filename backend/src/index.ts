import express, { Request, Response } from "express";
import cors from "cors"; // Для разрешения запросов с фронтенда
import { Pool } from "pg"; // Подключаем библиотеку pg

import tablets from "./routes/tablets";
import createDataSetings from "./routes/dateSettings";

const app = express();
const port = 4000;

app.use(cors()); // Разрешаем все источники для простоты
app.use(express.json()); // Для парсинга JSON-тела запроса

app.use("/tablets", tablets);
app.use("/create-data", createDataSetings);

// Маршрут для удаления таблицы
// app.get("/drop-table", async (req: Request, res: Response) => {
// 	try {
// 		// SQL-запрос для удаления таблицы
// 		const query = `DROP TABLE IF EXISTS date_settings;`;

// 		// Выполняем запрос
// 		await pool.query(query);

// 		// Отправляем успешный ответ
// 		res.status(200).json({
// 			message: `Таблица date_settings успешно удалена`,
// 		});
// 	} catch (err) {
// 		console.error("Ошибка при удалении таблицы:", err);
// 		res.status(500).json({ error: "Ошибка при удалении таблицы" });
// 	}
// });

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express backend!!!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

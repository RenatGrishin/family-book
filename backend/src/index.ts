import express, { Request, Response } from "express";
import cors from "cors"; // Для разрешения запросов с фронтенда
import { Pool } from "pg"; // Подключаем библиотеку pg

import { crateTableDateSettings } from "./tablets/date_settings";

const app = express();
const port = 4000;

app.use(cors()); // Разрешаем все источники для простоты
app.use(express.json()); // Для парсинга JSON-тела запроса

// Создаем пул подключений к базе данных
const pool = new Pool({
	user: "myuser",
	host: "postgres_db", // Это имя контейнера PostgreSQL в docker-compose
	database: "mydatabase",
	password: "mypassword",
	port: 5432,
});

// // Маршрут для создания таблицы person
app.post("/create-person-table", async (req: Request, res: Response) => {
	try {
		crateTableDateSettings(pool);

		res.status(200).send("Таблица person успешно создана!");
	} catch (err) {
		console.error("Ошибка при создании таблицы:", err);
		res.status(500).send("Ошибка при создании таблицы");
	}
});

// Маршрут для получения всех таблиц
app.get("/tables", async (req: Request, res: Response) => {
	try {
		const client = await pool.connect();

		// Запрос для получения всех таблиц
		const result = await client.query(`
		SELECT tablename
		FROM pg_tables
		WHERE schemaname = 'public';
	  `);

		client.release();

		// Отправляем результат клиенту
		res.status(200).json(result.rows);
	} catch (err) {
		console.error("Ошибка при получении таблиц:", err);
		res.status(500).send("Ошибка при получении таблиц");
	}
});

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express backend!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

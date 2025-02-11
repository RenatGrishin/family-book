import express, { Request, Response } from "express";
import cors from "cors"; // Для разрешения запросов с фронтенда
import { Pool } from "pg"; // Подключаем библиотеку pg

import { crateTableDateSettings } from "./data_settings/index";

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

// Маршрут для создания таблицы person
app.post("/create-person-table", async (req: Request, res: Response) => {
	const query = `
        CREATE TABLE date_settings (
            id SERIAL PRIMARY KEY,
            date_type VARCHAR(50) NOT NULL CHECK (date_type IN ('exact', 'approximate', 'before', 'after', 'between')),
            start_date DATE NOT NULL,
            end_date DATE
        );
    `;

	try {
		await pool.query(query);
	} catch (error) {
		console.log("Ошибка при создании таблицы date_settings: " + error);
	}
});

// Маршрут для получения всех таблиц
app.get("/version", async (req: Request, res: Response) => {
	try {
		const query = `SELECT version();`;
		const result = await pool.query(query);

		res.json(result.rows[0]); // Отправляем результат клиенту
	} catch (err) {
		console.error("Ошибка при получении версии PostgreSQL:", err);
		res.status(500).json({
			error: "Ошибка при получении версии PostgreSQL",
		});
	}
});

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express backend!!!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

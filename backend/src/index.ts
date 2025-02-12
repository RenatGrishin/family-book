import express, { Request, Response } from "express";
import cors from "cors"; // Для разрешения запросов с фронтенда
import { Pool } from "pg"; // Подключаем библиотеку pg

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

// Маршрут для создания таблицы date_settings
app.get("/create-table", async (req: Request, res: Response) => {
	try {
		// SQL-запрос для создания таблицы
		const query = `
			CREATE TABLE date_settings (
			id SERIAL PRIMARY KEY,
			date_type VARCHAR(50) NOT NULL CHECK (date_type IN ('exact', 'approximate', 'before', 'after', 'between')),
			start_date DATE NOT NULL,
			end_date DATE
			);
	  	`;

		// Выполняем запрос
		await pool.query(query);

		// Отправляем успешный ответ
		res.status(201).json({
			message: "Таблица date_settings успешно создана",
		});
	} catch (err) {
		console.error("Ошибка при создании таблицы:", err);
		res.status(500).json({ error: "Ошибка при создании таблицы" });
	}
});

// Маршрут для удаления таблицы
app.get("/drop-table", async (req: Request, res: Response) => {
	try {
		// SQL-запрос для удаления таблицы
		const query = `DROP TABLE IF EXISTS date_settings;`;

		// Выполняем запрос
		await pool.query(query);

		// Отправляем успешный ответ
		res.status(200).json({
			message: `Таблица date_settings успешно удалена`,
		});
	} catch (err) {
		console.error("Ошибка при удалении таблицы:", err);
		res.status(500).json({ error: "Ошибка при удалении таблицы" });
	}
});

// Маршрут для получения списка таблиц
app.get("/tables", async (req: Request, res: Response) => {
	try {
		// Выполняем SQL-запрос к information_schema.tables
		const query = `
		SELECT table_name
		FROM information_schema.tables
		WHERE table_schema = 'public'
		ORDER BY table_name;
	  `;

		const result = await pool.query(query);

		// Отправляем результат клиенту
		res.json(result.rows);
	} catch (err) {
		console.error("Ошибка при получении списка таблиц:", err);
		res.status(500).json({ error: "Ошибка при получении списка таблиц" });
	}
});

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express backend!!!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

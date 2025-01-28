import express, { Request, Response } from "express";
import cors from "cors"; // Для разрешения запросов с фронтенда
import { Pool } from "pg"; // Подключаем библиотеку pg

import {
	createTablesDateSettings,
	createTablePerson,
	getTables,
	checkTables,
	deleteTablet,
} from "./createTables/index";

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

app.post("/v1/send-query", async (req: Request, res: Response) => {
	const { query } = req.body;

	try {
		const result = await pool.query(query);
		res.json(result.rows);
	} catch (error) {
		console.error("Error executing query", error);
		res.status(500).json({ error: "Failed to execute query" });
	}
});

app.get("/sql/get", async (req: Request, res: Response) => {
	try {
		const tables = await getTables(pool); // Получаем список таблиц
		const setcheckTables = await checkTables(pool, tables);

		if (setcheckTables?.result.length) {
			console.log(setcheckTables);
			res.status(200).json(setcheckTables);
		} else {
			console.log("Список таблиц:", tables);
			res.status(200).json(tables);
		}
	} catch (err) {
		console.error(err);
		res.status(500).send("Ошибка при получении списка таблиц");
	}
});

app.get("/sql/delete", async (req: Request, res: Response) => {
	try {
		const tables = await deleteTablet(pool); // Получаем список таблиц
		console.log("Список таблиц:", tables);
		res.status(200).json(tables);
	} catch (err) {
		console.error(err);
		res.status(500).send("Ошибка при получении списка таблиц");
	}
});

// Пример запроса к базе данных
app.get("/api/db", async (req: Request, res: Response) => {
	try {
		const result = await pool.query("SELECT NOW()");
		res.json(result.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).send("Ошибка подключения к базе данных");
	}
});

app.get("/api/message", (req: Request, res: Response) => {
	res.json({ message: "Hello from Express API!" });
});

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express backend!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

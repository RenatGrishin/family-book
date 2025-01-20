const express = require("express");
const cors = require("cors"); // Для разрешения запросов с фронтенда
const { Pool } = require("pg"); // Подключаем библиотеку pg
const app = express();
const port = 4000;

app.use(cors()); // Разрешаем все источники для простоты

// Создаем пул подключений к базе данных
const pool = new Pool({
	user: "myuser",
	host: "postgres_db", // Это имя контейнера PostgreSQL в docker-compose
	database: "mydatabase",
	password: "mypassword",
	port: 5432,
});

// Пример запроса к базе данных
app.get("/api/db", async (req, res) => {
	try {
		const result = await pool.query("SELECT NOW()");
		res.json(result.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).send("Ошибка подключения к базе данных");
	}
});

app.get("/api/message", (req, res) => {
	res.json({ message: "Hello from Express API!" });
});

app.get("/", (req, res) => {
	res.send("Hello from Express backend!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

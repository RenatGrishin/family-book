const express = require("express");
const cors = require("cors"); // Для разрешения запросов с фронтенда
const app = express();
const port = 4000;

app.use(cors()); // Разрешаем все источники для простоты

app.get("/api/message", (req, res) => {
	res.json({ message: "Hello from Express API!" });
});

app.get("/", (req, res) => {
	res.send("Hello from Express backend!");
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});

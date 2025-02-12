import { Pool } from "pg";

export const pool = new Pool({
	user: "myuser",
	host: "postgres_db", // Это имя контейнера PostgreSQL в docker-compose
	database: "mydatabase",
	password: "mypassword",
	port: 5432,
});

"use client";
import { useState } from "react";

export default function PageSendQuery() {
	const [text, setText] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
	};

	const handleSubmit = async () => {
		try {
			const response = await fetch(
				"http://localhost:4000/v1/send-query",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ query: text }),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to send query");
			}

			const data = await response.json();
			console.log("Query result:", data);
		} catch (error) {
			console.error("Error:", error);
		}
	};
	return (
		<div>
			<div>
				<textarea
					value={text}
					onChange={handleChange}
					rows={4}
					cols={100}
				></textarea>
			</div>

			<button onClick={handleSubmit}>Отправить данные</button>
		</div>
	);
}

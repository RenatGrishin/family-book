"use client";
import { useState } from "react";
import { Flex, Button, TextArea } from "@radix-ui/themes";

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
		<Flex direction="column" gap="2">
			<TextArea onChange={handleChange}></TextArea>
			<Button onClick={handleSubmit}>Send</Button>
		</Flex>
	);
}

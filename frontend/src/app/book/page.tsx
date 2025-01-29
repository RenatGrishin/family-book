"use client";
import { useEffect, useState } from "react";
import {
	Box,
	Card,
	Select,
	Text,
	TextField,
	SegmentedControl,
	Button,
} from "@radix-ui/themes";

export default function PageBook() {
	const [gender, setGender] = useState<"" | "male" | "female">("");
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [birthName, setBirthtName] = useState<string>("");
	const [maidenName, setMaidenName] = useState<string>("");

	useEffect(() => {
		console.log(gender);
	}, [gender]);

	return (
		<Box maxWidth={"400px"}>
			<Card>
				<Select.Root
					value={`${gender}`}
					onValueChange={(val) => {
						setGender(val as "male" | "female" | "");
					}}
				>
					<Select.Trigger placeholder="Пол" />
					<Select.Content>
						<Select.Item value="male">Мужской</Select.Item>
						<Select.Item value="female">Женский</Select.Item>
						<Select.Item value="null">Неизвестен</Select.Item>
					</Select.Content>
				</Select.Root>
				<Box>
					<Text as="div">Имя</Text>
					<TextField.Root
						size={"2"}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
					></TextField.Root>
					<Text as="div">Фамилия</Text>
					<TextField.Root
						size={"2"}
						onChange={(e) => {
							setLastName(e.target.value);
						}}
					></TextField.Root>
				</Box>
				<Box>
					<Text as="div">Родное имя</Text>
					<TextField.Root
						size={"2"}
						onChange={(e) => {
							setBirthtName(e.target.value);
						}}
					></TextField.Root>
					<Text as="div">Родная фамилия</Text>
					<TextField.Root
						size={"2"}
						onChange={(e) => {
							setMaidenName(e.target.value);
						}}
					></TextField.Root>
				</Box>
				<Box>
					<Text as="div">Дата рождения</Text>
					<TextField.Slot>
						<input
							id="dob"
							type="date"
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</TextField.Slot>
					<Text as="div">Место рождения</Text>
					<TextField.Root size={"2"}></TextField.Root>
				</Box>
				<Box>
					<SegmentedControl.Root defaultValue="false">
						<SegmentedControl.Item value="false">
							Жив
						</SegmentedControl.Item>
						<SegmentedControl.Item value="true">
							Умер
						</SegmentedControl.Item>
					</SegmentedControl.Root>
				</Box>
				<Box>
					<Text as="div">Дата смерти</Text>
					<TextField.Slot>
						<input
							id="dob"
							type="date"
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</TextField.Slot>
					<Text as="div">Место смерти</Text>
					<TextField.Root size={"2"}></TextField.Root>
					<Text as="div">Причина смерти</Text>
					<TextField.Root size={"2"}></TextField.Root>
					<Text as="div">Место захоронения</Text>
					<TextField.Root size={"2"}></TextField.Root>
				</Box>
				<Button>Отправить</Button>
			</Card>
		</Box>
	);
}

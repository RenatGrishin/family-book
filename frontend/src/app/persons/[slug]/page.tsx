"use client";
import { useParams } from "next/navigation";
import personStore from "@/stores/persons/personStore";
import { Avatar, Text, Heading } from "@radix-ui/themes";
import PersonCard from "@/modules/PersonCard/PersonCard";

import styles from "./styles.module.css";

export default function PersonPage() {
	const params = useParams() as { slug: string };
	const { person } = personStore;
	const { slug } = params;

	const getColor = () => {
		switch (person.gender) {
			case "male":
				return "indigo";
			case "female":
				return "pink";
			default:
				return "brown";
		}
	};

	const getGender = () => {
		let gender = "Неизвестен";

		switch (gender) {
			case "male":
				gender = "Мужской";
			case "female":
				gender = "Женский";
		}

		return (
			<Text as="p">
				<Text color="gray">Пол: </Text>
				{gender}
			</Text>
		);
	};

	return (
		<div className="container">
			<div className={styles.main}>
				<div className={styles.head}>
					<Avatar
						variant="soft"
						size={"8"}
						color={getColor()}
						fallback={`${
							person.first_name[0] + person.last_name[0]
						}`}
					/>
					<div className={styles.text}>
						<div className={styles.name}>
							<Text size="7" weight="bold" as="p">
								{person.first_name} {person.last_name}
							</Text>
							<Text size="5" weight="bold" color="gray">
								{person.birth_name} {person.maiden_name}
							</Text>
							{(person.birth_name || person.maiden_name) && (
								<Text
									size="5"
									weight="bold"
									color="gray"
									as="p"
								>
									{person.birth_name} {person.maiden_name}
								</Text>
							)}
							{getGender()}
						</div>
					</div>
				</div>
			</div>
			{person.birth_date && (
				<div>
					<Heading size="6">Рождение</Heading>
					{person.birth_date && (
						<Text as="p">
							<Text color="gray">Дата рождения: </Text>
							{person.birth_date}
						</Text>
					)}
				</div>
			)}
			{(person.mother || person.father) && (
				<div>
					<Heading size="6">Родственники</Heading>
					{person.father && (
						<PersonCard connection="Папа" {...person.father} />
					)}
					{person.mother && (
						<PersonCard connection="Мама" {...person.mother} />
					)}
				</div>
			)}
		</div>
	);
}

"use client";
import { Avatar, Card, Heading, Text } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { observer } from "mobx-react-lite";

type TPersonCard = {
	gender?: "male" | "female";
	first_name: string;
	last_name: string;
	maiden_name?: string;
	birth_date?: string;
	death_date?: string;
};

export const PersonCard = observer(
	({
		gender,
		first_name,
		last_name,
		maiden_name,
		birth_date,
		death_date,
	}: TPersonCard) => {
		const getColor = () => {
			switch (gender) {
				case "male":
					return "indigo";
				case "female":
					return "pink";
				default:
					return "brown";
			}
		};

		const getDate = () => {
			if (!birth_date && !death_date) {
				return;
			}

			let result = "";

			if (birth_date) {
				result = birth_date;
			}

			if (death_date) {
				result = `${
					result
						? `${result} - ${death_date}`
						: `Неизвестно – ${death_date}`
				}`;
			}

			return (
				<Text size={"1"} color="gray">
					{result}
				</Text>
			);
		};

		return (
			<Card className={styles.card}>
				<div className={styles.head}>
					<Avatar
						variant="soft"
						size={"4"}
						color={getColor()}
						fallback={`${first_name[0] + last_name[0]}`}
					/>
					<div className={styles.name}>
						<Heading size="3">
							{first_name} {last_name}
						</Heading>
						{maiden_name && (
							<Heading size="3" color="gray">
								({maiden_name})
							</Heading>
						)}
					</div>
				</div>
				{getDate()}
			</Card>
		);
	}
);

export default PersonCard;

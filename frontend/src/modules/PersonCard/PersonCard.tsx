"use client";
import { Avatar, Card, Heading, Text } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { IPersonMainInfo } from "@/types/main";

export const PersonCard = observer(
	({
		id,
		connection,
		gender,
		first_name,
		last_name,
		maiden_name,
		birth_date,
		death_date,
	}: IPersonMainInfo) => {
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
				<Link href={`/persons/${id}`}>
					{connection && (
						<Text
							size={"1"}
							color="gray"
							className={styles.connection}
						>
							{connection}
						</Text>
					)}
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
				</Link>
			</Card>
		);
	}
);

export default PersonCard;

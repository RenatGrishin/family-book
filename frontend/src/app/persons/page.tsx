import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import PersonCard from "@/modules/PersonCard/PersonCard";
import personStore from "@/stores/persons/personsStore";

import styles from "./styles.module.css";

export const metadata: Metadata = {
	title: "Family Tree",
	description: "Список людей",
};

export default function RootLayout() {
	const { persons } = personStore;
	return (
		<div className={`container ${styles.container}`}>
			{persons.map((item) => (
				<PersonCard key={item.id} {...item} />
			))}
		</div>
	);
}

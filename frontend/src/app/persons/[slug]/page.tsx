"use client";
import { useParams } from "next/navigation";
import personStore from "@/stores/persons/personStore";

export default function PersonPage() {
	const params = useParams() as {slug: string};
	const { slug } = params;

	const {person} = personStore;

	return <div className="container">Person id: {slug}
	<div>{person.first_name}</div>
	</div>;
}

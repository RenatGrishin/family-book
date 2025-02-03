import { makeAutoObservable } from "mobx";

type TPerson = {
	id: number;
	gender?: "male" | "female";
	avatar?: string;
	first_name: string;
	last_name: string;
	birth_name?: string;
	maiden_name?: string;
	birth_date?: string;
	birthplace?: string;
	death_status?: boolean;
	death_date?: string;
	death_place?: string;
	cause_of_death?: string;
	burial_place?: string;
};

class PersonsStore {
	persons = [] as TPerson[];

	constructor() {
		makeAutoObservable(this);

		this.persons = [
			{
				id: 1,
				gender: "male",
				first_name: "Гомер",
				last_name: "Котов",
				birth_date: "01.02.2021",
			},
			{
				id: 2,
				gender: "female",
				first_name: "Маша",
				last_name: "Котова",
				maiden_name: "Львова",
				birth_date: "22.03.2022",
			},
			{
				id: 3,
				gender: "male",
				first_name: "Морфей",
				last_name: "Котов",
				birth_date: "14.11.2003",
				death_date: "27.06.2022",
			},
			{
				id: 4,
				first_name: "Саша",
				last_name: "Котов",
				death_date: "27.06.2010",
			},
			{
				id: 5,
				first_name: "Предок",
				last_name: "Котов",
			},
		];
	}
}

const personStore = new PersonsStore();
export default personStore;

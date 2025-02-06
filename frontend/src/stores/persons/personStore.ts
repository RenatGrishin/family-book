import { IPersonMainInfo } from "@/types/main";
import { makeAutoObservable } from "mobx";

interface TParent extends IPersonMainInfo {
	mother?: IPersonMainInfo;
	father?: IPersonMainInfo;
}

class PersonStore {
	person = {
		id: 6,
		gender: "female",
		first_name: "Алиса",
		last_name: "Котова",
		birth_date: "31.01.2023",
		mother: {
			id: 2,
			gender: "female",
			first_name: "Маша",
			last_name: "Котова",
			maiden_name: "Львова",
			birth_date: "22.03.2022",
		},
		father: {
			id: 1,
			gender: "male",
			first_name: "Гомер",
			last_name: "Котов",
			birth_date: "01.02.2021",
		},
	} as TParent;

	constructor() {
		makeAutoObservable(this);
	}
}

const personStore = new PersonStore();
export default personStore;

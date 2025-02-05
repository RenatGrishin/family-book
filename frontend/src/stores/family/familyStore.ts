import { makeAutoObservable } from "mobx";

type TFamilySore = {
	id: number;
	child_id: number;
	mother_id?: number;
	father_id?: number;
	kinship_type: "biological" | "adopted" | "foster";
};

class FamilyStore {
	store = [
		{
			id: 1,
			child_id: 6,
			mother_id: 2,
			father_id: 1,
			kinship_type: "biological",
		},
	] as TFamilySore[];

	constructor() {
		makeAutoObservable(this);
	}
}

const familyStore = new FamilyStore();

export default familyStore;

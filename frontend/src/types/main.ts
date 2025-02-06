export type TGender = "male" | "female" | "";

export type TKinship = "biological" | "adopted" | "foster";

export interface IPersonMainInfo {
	id: number;
	gender?: TGender;
	avatar?: string;
	first_name: string;
	last_name: string;
	birth_name?: string;
	maiden_name?: string;
	birth_date?: string;
	death_date?: string;
}

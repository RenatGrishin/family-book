import { makeAutoObservable } from "mobx";

export type TNavHeaderStore = "home" | "events" | "persons" | "tree";

class HeaderStore {
	navState = "home" as TNavHeaderStore;

	constructor() {
		makeAutoObservable(this);
	}

	get result(): TNavHeaderStore {
		return this.navState;
	}

	toggleNav = (val: TNavHeaderStore): void => {
		this.navState = val;
	};
}
const headerStore = new HeaderStore();
export default headerStore;

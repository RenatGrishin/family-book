import { makeAutoObservable } from "mobx";

export type TNavHeaderStore = "home" | "events" | "persons" | "tree";

class HeaderStore {
	navState = "" as TNavHeaderStore;

	constructor() {
		makeAutoObservable(this);
	}

	get result(): TNavHeaderStore {
		return this.navState;
	}

	toggleNav(val: TNavHeaderStore): void {
		this.navState = val;
	}
}

export default new HeaderStore();

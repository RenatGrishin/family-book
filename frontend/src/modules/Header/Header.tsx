"use client";
import headerStore, { TNavHeaderStore } from "@/stores/headerStore";
import { TabNav } from "@radix-ui/themes";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";

export const Header = observer(() => {
	const { navState, toggleNav } = headerStore;
	const router = useRouter();

	const handleNavigation = (path: string, state: TNavHeaderStore) => {
		toggleNav(state);
		router.push(path);
	};

	return (
		<header>
			<TabNav.Root justify="center">
				<TabNav.Link
					active={navState === "home"}
					onClick={() => {
						handleNavigation("/", "home");
					}}
				>
					Главная
				</TabNav.Link>
				<TabNav.Link
					active={navState === "events"}
					onClick={() => {
						handleNavigation("/events", "events");
					}}
				>
					События
				</TabNav.Link>
				<TabNav.Link
					active={navState === "persons"}
					onClick={() => {
						handleNavigation("/persons", "persons");
					}}
				>
					Люди
				</TabNav.Link>
				<TabNav.Link
					active={navState === "tree"}
					onClick={() => {
						handleNavigation("/tree", "tree");
					}}
				>
					Древо
				</TabNav.Link>
			</TabNav.Root>
		</header>
	);
});

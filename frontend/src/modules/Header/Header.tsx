"use client";
import { TabNav } from "@radix-ui/themes";
import { observer } from "mobx-react-lite";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = observer(() => {
	const [page, usePage] = useState<string>("home");
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const result = pathname?.split("/")[1] as string;

		if (!!result) {
			usePage("home");
		}

		usePage(result);
	}, [pathname]);

	return (
		<header>
			<TabNav.Root justify="center">
				<TabNav.Link
					active={page === "home"}
					onClick={() => {
						router.push("/");
					}}
				>
					Главная
				</TabNav.Link>
				<TabNav.Link
					active={page === "events"}
					onClick={() => {
						router.push("/events");
					}}
				>
					События
				</TabNav.Link>
				<TabNav.Link
					active={page === "persons"}
					onClick={() => {
						router.push("/persons");
					}}
				>
					Люди
				</TabNav.Link>
				<TabNav.Link
					active={page === "tree"}
					onClick={() => {
						router.push("/tree");
					}}
				>
					Древо
				</TabNav.Link>
			</TabNav.Root>
		</header>
	);
});

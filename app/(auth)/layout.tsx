import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main
			aria-label="layout-auth"
			className="relative p-4 md:p-8 w-full min-h-screen min-w-[320px] flex justify-center items-center"
		>
			{children}
		</main>
	);
}

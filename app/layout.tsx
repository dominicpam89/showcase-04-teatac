import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const fontPrimary = Montserrat({
	subsets: ["latin"],
	weight: ["500", "600", "700", "800", "900"],
	variable: "--font-primary",
});

const fontSecondary = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400"],
	variable: "--font-secondary",
});

export const metadata: Metadata = {
	title: "Teach and Tackle",
	description:
		"Welcome to TeaTac (Teach and Tackle), where students ask the real questions and teachers drop the knowledge bombs—sometimes with a side of sarcasm! Built with Next.js App Router, this is your go-to place for solving academic mysteries, sharing insights, and maybe cracking a joke or two along the way. Whether you're stumped or ready to stump your teacher, TeaTac (Teach and Tackle) is the place to get answers with a smile.",
	icons: {
		icon: "/assets/logo-md.png",
		apple: "/assets/logo-md.png",
		shortcut: "/assets/logo-md.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${fontPrimary.variable} ${fontSecondary.variable} font-secondary antialiased`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}

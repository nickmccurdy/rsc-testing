import type { Metadata } from "next";
import "server-only";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<p>layout</p>
				{children}
			</body>
		</html>
	);
}

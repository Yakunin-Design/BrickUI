import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
  variable: "--font-ibm-plex",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Brick uikit",
  description: "Declarative by design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jetbrainsMono} ${spaceGrotesk.variable} ${ibmPlex.variable} dark`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}

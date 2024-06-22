import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./css/style.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata = {
	title: "Yeasti",
	description: "This is description for Yeasti",
};

interface proptype {
	children: React.ReactNode;
}

export default function RootLayout({ children }: proptype) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>
				<Toaster position="top-center" richColors />
				<div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">{children}</div>
			</body>
		</html>
	);
}

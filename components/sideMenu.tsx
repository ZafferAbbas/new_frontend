"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function () {
	const selectedRef = useRef<any>(null);
	const pathname = usePathname();

	useEffect(() => {
		if (selectedRef.current) {
			switch (pathname) {
				case "/":
					selectedRef.current.style.display = "none";
					break;
				case "/draft":
					selectedRef.current.style.display = "block";
					selectedRef.current.style.top = "128px";
					break;
				case "/package":
					selectedRef.current.style.display = "block";
					selectedRef.current.style.top = "193px";
					break;
				case "/menu":
					selectedRef.current.style.display = "block";
					selectedRef.current.style.top = "256px";
					break;
				case "/edit":
					selectedRef.current.style.display = "block";
					selectedRef.current.style.top = "321px";
					break;
			}
		}
	}, []);

	return (
		<div className="bg-[url('/images/bg-sidemenu.svg')] bg-right-top bg-no-repeat bg-[#1D203E4A] rounded-l-2xl">
			<Link href="/">
				<img src="/images/menulogo.svg" alt="logo" className="block mx-auto mt-4 mb-[72px]" />
			</Link>
			<Link href="/draft">
				<img src="/images/icon_beer.svg" alt="menu" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/draft" ? "active" : ""}`} />
			</Link>
			<Link href="/package">
				<img src="/images/icon_bottle.svg" alt="menu" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/package" ? "active" : ""}`} />
			</Link>
			<Link href="/menu">
				<img src="/images/icon_menu.svg" alt="menu" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/menu" ? "active" : ""}`} />
			</Link>
			<Link href="/edit">
				<img src="/images/icon_add.svg" alt="add" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/edit" ? "active" : ""}`} />
			</Link>
			<img src="/images/selected.svg" alt="selected" className="absolute left-0 mx-auto hidden" ref={selectedRef} />
		</div>
	);
}

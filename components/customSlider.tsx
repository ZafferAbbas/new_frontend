"use client";
import React, { useEffect, useRef } from "react";

interface proptype {
	children: React.ReactNode;
}

export default function ({ children }: proptype) {
	const slider = useRef<any>(null);
	const isDown = useRef<any>(false);
	const startX = useRef<any>(null);
	const scrollLeft = useRef<any>(null);
	const sliderLeft = useRef<number>(0);

	useEffect(() => {
		if (slider && slider.current) {
			slider.current.addEventListener("mousedown", onMouseDown);
			slider.current.addEventListener("mouseleave", onMouseLeave);
			slider.current.addEventListener("mouseup", onMouseUp);
			slider.current.addEventListener("mousemove", onMouseMove);
		}
		return () => {
			if (slider && slider.current) {
				slider.current.removeEventListener("mousedown", onMouseDown);
				slider.current.removeEventListener("mouseleave", onMouseLeave);
				slider.current.removeEventListener("mouseup", onMouseUp);
				slider.current.removeEventListener("mousemove", onMouseMove);
			}
		};
	}, []);

	const onMouseDown = (e: any) => {
		isDown.current = true;
		startX.current = e.pageX - slider.current.offsetLeft;
		scrollLeft.current = sliderLeft.current;
	};

	const onMouseLeave = (e: any) => {
		isDown.current = false;
	};

	const onMouseUp = (e: any) => {
		isDown.current = false;
	};

	const onMouseMove = (e: any) => {
		if (!isDown.current) return;
		e.preventDefault();
		const x = e.pageX - slider.current.offsetLeft;
		const walk = x - startX.current;
		sliderLeft.current = Math.min(sliderLeft.current + walk, 0);
		sliderLeft.current = Math.max(sliderLeft.current, slider.current.parentElement.offsetWidth - slider.current.scrollWidth);
		slider.current.style.left = sliderLeft.current + "px";
	};

	return (
		<div className="relative flex justify-between gap-20 pb-4 mb-4" ref={slider}>
			{children}
		</div>
	);
}

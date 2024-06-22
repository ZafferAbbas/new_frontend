import React from "react";

interface proptype {
	children: React.ReactNode;
}

export default function ({ children }: proptype) {
	return (
		<div className="bg-[#1D203E] p-6 overflow-x-hidden overflow-y-auto" style={{ height: "calc(100vh - 44px)" }}>
			{children}
		</div>
	);
}

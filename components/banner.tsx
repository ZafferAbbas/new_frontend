interface proptype {
	bgImgSrc: string;
	title: string;
	border: boolean;
}

export default function ({ bgImgSrc, title, border = false }: proptype) {
	if (border) {
		return (
			<div className="rounded-[20px] bg-gradient-to-br from-[#01B7C5] to-[#782C96] bg-gradient p-[1px] mb-8" style={{ boxShadow: "0 10px 15px #0003" }}>
				<div className="h-44 rounded-[20px] grid place-items-center text-2xl font-semibold text-white" style={{ background: `center / cover url(${bgImgSrc})` }}>
					{title}
				</div>
			</div>
		);
	} else {
		return (
			<div className="h-44 rounded-[20px] grid place-items-center text-2xl font-semibold text-white mb-6" style={{ background: `center / cover url(${bgImgSrc})` }}>
				{title}
			</div>
		);
	}
}

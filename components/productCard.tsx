import Link from "next/link";

interface proptype {
	bgImgSrc: string;
	num: any;
	title: string;
	description: string;
	members: any;
	updateAction: any,
	onEditHandler: any,
	onDeleteHandler: any,
	recordId: any
}

export default function ({ recordId, bgImgSrc, num, title, description, members, updateAction }: proptype) {



	return (
		<div className="aspect-[1.41] mx-auto  shrink-0 rounded-[20px] bg-gradient-to-br from-[#01B7C5] to-[#782C96] bg-gradient p-[1px]" style={{ boxShadow: "0 10px 15px #0003" }}>
			<div className="relative h-full rounded-[20px]" style={{ background: `center / cover url(${bgImgSrc})` }}>
				<img src="/images/overlay.svg" alt="overlay" width="100%" className="absolute bottom-0 rounded-b-[20px] left-0" />
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Link href={{
						pathname: "/edit",
						query: {
							"Id": recordId
						}
					}} className=" bg-[#ffff] rounded m-2 justify-center items-center p-1 cursor-pointer">
						<img src={"/images/edit.svg"} />
					</Link>
					{/* <div onClick={() => {
						alert(recordId)
					}} className=" bg-[#ffff] rounded m-2 justify-center items-center p-1 cursor-pointer">
						<img src={"/images/trash.svg"} />
					</div> */}

				</div>
				<div onClick={updateAction} className="absolute top-[32%] left-0 right-0 bottom-0 cursor-pointer">
					<p className="text-[28px] leading-[28px] h-[28px] text-center font-bold text-white mb-3">{num ? num : null}</p>
					<p className={`px-4 text-[20px] leading-[20px] text-white font-semibold mb-2 ${num === "+" ? "text-center" : ""}`}>{title}</p>
					<p className={`px-4 text-[13px] leading-[13px] text-[#ffffff8b] ${num === "+" ? "text-center" : ""}`}>{description}</p>
				</div>
				<div className="absolute bottom-2 left-0 right-0 px-4 text-[12px] leading-[12px] text-[#ffffff60] flex justify-between">
					{members.map((member: any, index: number) => (
						<div key={index}>{member}</div>
					))}
				</div>
			</div>
		</div>
	);
}

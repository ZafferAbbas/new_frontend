"use client";

import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import ProductCard from "@/components/productCard";
import withAuth from "@/lib/withAuth";

function Home() {
	return (
		<div className="main-container">
			<SideMenu />
			<div className="overflow-hidden">
				<TopNavbar />
				<MainContent>
					<div className="container">
						<div className="grid grid-cols-1 md:grid-cols-3 text-white gap-y-6 md:gap-x-6 mb-6">
							<div className="col-span-2 bg-[#060B28] rounded-[20px] p-6">
								<p className="text-xs mb-3">Search for Product</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="hazy" />
							</div>
							<div className="bg-[#060B28] rounded-[20px] p-6">
								<p className="text-lg font-bold mb-3">Cant find what your looking for?</p>
								<div className="mx-auto bg-white rounded-xl w-[100px] h-8 grid place-items-center text-[10px] text-[#0F1535]">Add</div>
							</div>
						</div>
						Search Result...
					</div>
				</MainContent>
			</div>
		</div>
	);
}

export default withAuth(Home);

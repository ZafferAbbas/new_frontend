interface proptype {
	bgImgSrc: string;
	title: string;
	border: boolean;
	onClick?: () => void; // Optional onClick prop
  }
  
  const Banner2 = ({ bgImgSrc, title, border = false, onClick }: proptype) => {
	const commonClasses = "h-44 rounded-[20px] grid place-items-center text-2xl font-semibold text-white";
  
	if (border) {
	  return (
		<div
		  className="rounded-[20px] bg-gradient-to-br from-[#01B7C5] to-[#782C96] bg-gradient p-[1px] mb-8"
		  style={{ boxShadow: "0 10px 15px #0003" }}
		  onClick={onClick} // Attach the onClick handler
		>
		  <div className={commonClasses} style={{ background: `center / cover url(${bgImgSrc})` }}>
			{title}
		  </div>
		</div>
	  );
	} else {
	  return (
		<div className={commonClasses} style={{ background: `center / cover url(${bgImgSrc})` }} onClick={onClick}>
		  {title}
		</div>
	  );
	}
  };
  
  export default Banner2;
  
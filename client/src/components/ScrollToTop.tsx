/** @format */

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () =>
			window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<button
			onClick={() =>
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				})
			}
			className={`
				fixed
				bottom-8
				right-8
				z-50
				flex
				h-12
				w-12
				items-center
				justify-center
				rounded-full
				bg-blue-500
				shadow-lg
				transition-all
				duration-300
				hover:scale-110
				hover:bg-blue-600
				${
					visible
						? "opacity-100"
						: "pointer-events-none opacity-0"
				}
			`}
		>
			<FaArrowUp />
		</button>
	);
}

export default ScrollToTop;
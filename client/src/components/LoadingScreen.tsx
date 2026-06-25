/** @format */

import { AnimatePresence, motion } from "framer-motion";

type Props = {
	isLoading: boolean;
};

function LoadingScreen({ isLoading }: Props) {
	const name = "Aditya";

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black"
					initial={{ opacity: 1 }}
					exit={{
						opacity: 0,
						scale: 1.05,
					}}
					transition={{ duration: 0.8 }}
				>
					{/* Background Glow */}
					<div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />

					<div className="relative text-center">
						<div className="mb-8 flex justify-center">
							{name.split("").map((letter, index) => (
								<motion.span
									key={index}
									initial={{
										opacity: 0,
										y: 20,
									}}
									animate={{
										opacity: 1,
										y: 0,
									}}
									transition={{
										delay: index * 0.08,
										duration: 0.35,
									}}
									className="text-6xl font-black tracking-tight text-white"
								>
									{letter}
								</motion.span>
							))}
						</div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: 0.6,
							}}
							className="tracking-[0.3em] text-zinc-400 uppercase"
						>
							Full Stack Developer
						</motion.p>

						<div className="mx-auto mt-12 h-1 w-44 overflow-hidden rounded-full bg-white/10">
							<motion.div
								className="h-full rounded-full bg-blue-500"
								initial={{ x: "-100%" }}
								animate={{ x: "100%" }}
								transition={{
									duration: 1.3,
									ease: "easeInOut",
								}}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default LoadingScreen;

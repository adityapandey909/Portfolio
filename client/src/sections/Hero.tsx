/** @format */

import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const stack = [
	{
		name: "React",
		icon: <FaReact className="text-sky-400" size={22} />,
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className="text-blue-500" size={20} />,
	},
	{
		name: "Node.js",
		icon: <RiNodejsFill className="text-green-500" size={22} />,
	},
	{
		name: "MongoDB",
		icon: <SiMongodb className="text-green-400" size={20} />,
	},
];
function Hero() {
	const [currentStack, setCurrentStack] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentStack((prev) => (prev + 1) % stack.length);
		}, 1800);

		return () => clearInterval(timer);
	}, []);
	return (
		<section
			id="top"
			className="relative flex min-h-screen items-center overflow-hidden pt-24"
		>
			{/* Background Blobs */}
			<div aria-hidden="true" className="absolute inset-0 -z-10">
				<motion.div
					animate={{
						scale: [1, 1.15, 1],
						x: [0, 30, 0],
						y: [0, -20, 0],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
				/>

				<motion.div
					animate={{
						scale: [1.1, 1, 1.1],
						x: [0, -25, 0],
						y: [0, 25, 0],
					}}
					transition={{
						duration: 14,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]"
				/>
			</div>

			<div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 lg:gap-20 px-6 md:px-8 lg:grid-cols-2">
				{/* LEFT SIDE */}
				<div>
					<p className="mb-4 text-lg text-gray-400">Hello, I'm Aditya 👋</p>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl"
					>
						<motion.span
							animate={{
								backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								ease: "linear",
							}}
							style={{
								backgroundSize: "200% 200%",
							}}
							className="bg-linear-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent"
						>
							Full Stack
							<br />
							Developer
						</motion.span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
					>
						Crafting modern web experiences with React, TypeScript and Node.js.
					</motion.p>

					{/* Buttons */}
					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<a
							href="#projects"
							className="group rounded-xl bg-blue-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 hover:shadow-[0_10px_35px_rgba(59,130,246,.45)] active:scale-95"
						>
							<span className="flex items-center gap-2">
								View Projects
								<motion.span
									animate={{
										x: [0, 4, 0],
									}}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									→
								</motion.span>
							</span>
						</a>

						<a
							href="#contact"
							className="rounded-xl border border-white/10 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/5"
						>
							Contact Me
						</a>
					</div>

					{/* Info */}
					<div className="mt-8 space-y-1 text-sm text-gray-400">
						<p>🚀 Available for Internship</p>
						<p>📍 Raipur, India</p>
						<p>⚡ Building modern web experiences</p>
					</div>

					{/* Tech Stack + Socials */}
					<div className="mt-10 flex flex-wrap items-center gap-3">
						{["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"].map(
							(tech, index) => (
								<motion.span
									key={tech}
									initial={{ y: 0 }}
									animate={{
										y: [0, -6, 0],
									}}
									transition={{
										duration: 2.5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: index * 0.25,
									}}
									whileHover={{
										scale: 1.08,
										y: -10,
									}}
									className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
								>
									{tech}
								</motion.span>
							),
						)}

						<div className="mt-4 flex gap-5 sm:ml-4 sm:mt-0">
							<a
								href="https://github.com/adityapandey909"
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub"
							>
								<FaGithub
									size={28}
									className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white"
								/>
							</a>

							<a
								href="https://linkedin.com/in/adityapandeycontact"
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn"
							>
								<FaLinkedin
									size={28}
									className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
								/>
							</a>

							<a href="mailto:adityapandeycontact@gmail.com" aria-label="Email">
								<FaEnvelope
									size={28}
									className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-red-500"
								/>
							</a>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{
						opacity: 1,
						x: 0,
						y: [0, -15, 0],
					}}
					transition={{
						duration: 0.8,
						y: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						},
					}}
					className="hidden items-center justify-center lg:flex"
				>
					<div className="relative -translate-x-1">
						{/* Rotating Glow */}
						<motion.div
							animate={{ rotate: 360 }}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute -inset-16 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl"
						/>

						{/* Current Stack */}
						<motion.div
							animate={{ y: [0, -8, 0] }}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute -left-38 top-4 z-44 w-40 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
						>
							<p className="mb-3 text-sm font-medium text-gray-400">
								Current Stack
							</p>

							<div className="relative h-10 overflow-hidden rounded-lg bg-white/5 px-3">
								<AnimatePresence mode="wait" initial={false}>
									<motion.div
										key={stack[currentStack].name}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{
											type: "spring",
											stiffness: 260,
											damping: 24,
										}}
										className="absolute inset-0 flex items-center gap-3 px-3"
									>
										{stack[currentStack].icon}
										<span className="font-semibold text-white">
											{stack[currentStack].name}
										</span>
									</motion.div>
								</AnimatePresence>
							</div>
						</motion.div>

						{/* Outer Rings */}
						<div className="absolute inset-0 rounded-full border border-white/10 scale-110" />
						<div className="absolute inset-0 rounded-full border border-white/10 scale-125 opacity-50" />

						{/* Circle */}
						<div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl">
							<img
								src="/profile.jpg"
								alt="Aditya"
								loading="eager"
								className="h-44 w-44 rounded-full object-cover shadow-2xl"
							/>

							{/* Online indicator */}
							<motion.div
								animate={{
									scale: [1, 1.3, 1],
									opacity: [1, 0.7, 1],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
								}}
								className="absolute bottom-16 right-16 h-3 w-3 rounded-full bg-green-400 ring-2 ring-[#0B0B0B]"
							/>
						</div>

						{/* Open To Work */}
						<motion.div
							animate={{ y: [0, 8, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute -right-36 bottom-4 z-20 w-40 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
						>
							<p className="text-sm text-gray-400">Open To Work</p>

							<p className="mt-1 font-semibold text-green-400 whitespace-nowrap">
								Available
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Hero;

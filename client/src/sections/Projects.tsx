/** @format */

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
	const projects = [
		{
			title: "HypeKicks",
			description:
				"Modern sneaker e-commerce platform with authentication and cart functionality.",
			stack: ["React", "Node.js", "MongoDB"],
			image: "/projects/hypekicks.png",
			github: "https://github.com/adityapandey909/HypeKicks",
			live: "#",
		},
		{
			title: "Vision Vigil",
			description:
				"Women safety analytics platform built using React and TypeScript.",
			stack: ["React", "TypeScript"],
			image: "/projects/visionvigil.png",
			github: "#",
			live: "#",
		},
		{
			title: "Ecoyaan Checkout Flow",
			description: "Checkout experience built with Next.js and TypeScript.",
			stack: ["Next.js", "TypeScript"],
			image: "/projects/ecoyaan.png",
			github: "https://github.com/adityapandey909/ecoyaan-checkout-flow",
			live: "#",
		},
	];

	return (
		<section id="projects" className="mx-auto max-w-7xl px-8 py-32">
			<div className="mb-20 text-center">
				<h2 className="text-5xl font-bold">Projects</h2>

				<p className="mt-4 text-gray-400">Some things I've built.</p>
			</div>

			<div className="grid gap-10 lg:grid-cols-2">
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: index * 0.1,
						}}
						viewport={{ once: true }}
						whileHover={{
							y: -10,
						}}
						className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] ${
							index === 0 ? "lg:col-span-2" : ""
						}`}
					>
						<div className="group relative h-56 overflow-hidden border-b border-white/10">
							<img
								src={project.image}
								alt={project.title}
								loading="lazy"
								className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>

							<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

							<div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
									View Project →
								</span>
							</div>

							{index === 0 && (
								<div className="absolute left-5 top-5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 backdrop-blur">
									Featured
								</div>
							)}
						</div>

						<div className="p-8">
							<h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-blue-400">
								{project.title}
							</h3>

							<p className="mt-4 leading-7 text-gray-400">
								{project.description}
							</p>

							<div className="mt-6 flex flex-wrap gap-3">
								{project.stack.map((tech) => (
									<span
										key={tech}
										className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="mt-8 flex gap-4">
								{project.github !== "#" && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:bg-white/10"
									>
										<FaGithub />
										GitHub
									</a>
								)}

								{project.github !== "#" && (
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 transition-all duration-300 hover:scale-105 hover:bg-blue-600"
									>
										<FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-1" />
										Live Demo
									</a>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default Projects;

/** @format */

import { motion } from "framer-motion";

function Experience() {
	const experiences = [
		{
			year: "2024",
			title: "Full Stack Java Developer",
			company: "Seed Infotech, Pune",
			description:
				"Completed Full Stack Java Developer training and built projects using Java and web technologies.",
		},
		{
			year: "2026 - Present",
			title: "MCA Student",
			company: "Amity University, Bengaluru",
			description:
				"Pursuing MCA while focusing on React, Node.js, TypeScript and modern web development.",
		},
		{
			year: "2026",
			title: "Personal Projects",
			company: "Independent",
			description:
				"Building full-stack applications and continuously improving frontend and backend skills.",
		},
	];

	return (
		<section id="experience" className="mx-auto max-w-6xl px-8 py-32">
			<div className="mb-20 text-center">
				<h2 className="text-5xl font-bold">Experience</h2>

				<p className="mt-4 text-gray-400">My journey so far.</p>
			</div>

			<div className="relative">
				<div className="absolute left-5 top-0 h-full w-px bg-white/10" />

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.year}
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							viewport={{ once: true }}
							className="relative flex gap-8"
						>
							<div className="z-10 mt-2 h-4 w-4 rounded-full bg-blue-500" />

							<div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
								<div className="text-sm text-blue-400">{exp.year}</div>

								<h3 className="mt-2 text-2xl font-bold">{exp.title}</h3>

								<p className="mt-1 text-gray-400">{exp.company}</p>

								<p className="mt-4 leading-7 text-gray-400">
									{exp.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;

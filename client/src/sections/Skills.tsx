/** @format */

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {

  SiTypescript,

  SiTailwindcss,

  SiExpress,

  SiMongodb,

} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
	const skillGroups = [
		{
			title: "Frontend",
			icon: <FaReact size={32} className="text-cyan-400" />,
			skills: ["React", "TypeScript", "Tailwind CSS"],
		},
		{
			title: "Backend",
			icon: <FaNodeJs size={32} className="text-green-500" />,
			skills: ["Node.js", "Express"],
		},
		{
			title: "Database",
			icon: <SiMongodb size={32} className="text-green-400" />,
			skills: ["MongoDB"],
		},
		{
			title: "Tools",
			icon: <FaGithub size={32} className="text-gray-300" />,
			skills: ["Git", "GitHub", "VS Code"],
		},
	];

	return (
		<section id="skills" className="mx-auto max-w-7xl px-8 py-32">
			<div className="mb-20 text-center">
				<h2 className="text-5xl font-bold">Skills</h2>

				<p className="mt-4 text-gray-400">Technologies I work with.</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
				{skillGroups.map((group, index) => (
					<motion.div
						key={group.title}
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
						className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
					>
						<div className="mb-6">{group.icon}</div>

						<h3 className="mb-6 text-2xl font-bold">{group.title}</h3>

						<div className="space-y-3">
							{group.skills.map((skill) => (
								<div
									key={skill}
									className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/10"
								>
									{skill}
								</div>
							))}
						</div>
					</motion.div>
				))}
			</div>

			{/* Tech icons row */}
			<div className="mt-24 flex flex-wrap justify-center gap-10 text-5xl text-gray-400">
				<FaReact className="transition hover:scale-125 hover:text-cyan-400" />
				<SiTypescript className="transition hover:scale-125 hover:text-blue-500" />
				<SiTailwindcss className="transition hover:scale-125 hover:text-sky-400" />
				<FaNodeJs className="transition hover:scale-125 hover:text-green-500" />
				<SiExpress className="transition hover:scale-125 hover:text-white" />
				<SiMongodb className="transition hover:scale-125 hover:text-green-400" />
				<FaGitAlt className="transition hover:scale-125 hover:text-orange-500" />
				<FaGithub className="transition hover:scale-125 hover:text-white" />
				<VscVscode className="transition hover:scale-125 hover:text-blue-500" />
			</div>
		</section>
	);
}

export default Skills;

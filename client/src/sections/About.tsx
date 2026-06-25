/** @format */

import { motion } from "framer-motion";

function About() {
	return (
		<section
			id="about"
			className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32"
		>
			<div className="mb-16 text-center">
				<h2 className="text-4xl font-bold md:text-5xl">About Me</h2>

				<p className="mt-4 text-gray-400">Get to know me better.</p>
			</div>

			<div className="grid gap-16 lg:grid-cols-2">
				{/* LEFT */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="flex justify-center"
				>
					<div className="relative">
						<div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

						<img
							src="/profile.jpg"
							alt="Aditya"
							className="relative h-72 w-full max-w-sm rounded-3xl border border-white/10 object-cover md:h-96"
						/>
					</div>
				</motion.div>

				{/* RIGHT */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<h3 className="text-3xl font-bold md:text-4xl">Hi, I'm Aditya 👋</h3>

					<p className="mt-6 text-gray-400 leading-7 md:leading-8">
						I'm a Full Stack Developer and MCA student from Raipur, India. I
						enjoy creating modern web applications with React, TypeScript,
						Node.js and MongoDB.
					</p>

					<div className="mt-10 space-y-4">
						<div
							className="
                            flex items-center gap-3
                            rounded-xl
                            border border-white/10
                            bg-white/5
                            p-4
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:bg-white/10"
						>
							🎓 MCA Student
						</div>

						<div
							className="
                            flex items-center gap-3
                            rounded-xl
                            border border-white/10
                            bg-white/5
                            p-4
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:bg-white/10"
						>
							💻 Full Stack Developer
						</div>

						<div
							className="
                            flex items-center gap-3
                            rounded-xl
                            border border-white/10
                            bg-white/5
                            p-4
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:bg-white/10"
						>
							🚀 Looking for Fulltime / Internship / Freelance / Contract
						</div>

						<div
							className="
                        flex items-center gap-3
                        rounded-xl
                        border border-white/10
                        bg-white/5
                        p-4
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:bg-white/10"
						>
							☕ Coffee + Code
						</div>
					</div>

					<a
						href="/resume.pdf"
						download
						className="
							mt-10
							inline-flex
							items-center
							rounded-xl
							bg-blue-500
							px-6
							py-3
							font-semibold
							transition-all
							duration-300
							hover:scale-105
							hover:bg-blue-600"
					>
						Download Resume
					</a>
				</motion.div>
			</div>
		</section>
	);
}

export default About;

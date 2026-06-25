/** @format */

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

type GithubUser = {
	avatar_url: string;
	public_repos: number;
	followers: number;
	following: number;
	html_url: string;
	created_at: string;
	name: string;
	login: string;
};

function GitHub() {
	const [user, setUser] = useState<GithubUser | null>(null);

	useEffect(() => {
		const fetchGithub = async () => {
			try {
				const { data } = await axios.get(
					"https://api.github.com/users/adityapandey909",
				);

				setUser(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchGithub();
	}, []);

	return (
		<section
			id="github"
			className="scroll-mt-32 mx-auto max-w-7xl px-8 py-32"
		>
			<div className="relative">
				{/* Background Glow */}
				<div className="absolute left-1/2 top-1/2 -z-10 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

				{/* Heading */}
				<div className="mb-20 text-center">
					<h2 className="text-5xl font-bold">GitHub Activity</h2>

					<p className="mt-4 text-gray-400">
						My coding activity and open source journey.
					</p>
				</div>

				{/* Main Card */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]"
				>
					{/* Profile */}
					<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
						<div className="flex items-center gap-5">
							<a
								href={user?.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-transform duration-300 hover:scale-105"
							>
								<img
									src={user?.avatar_url}
									alt="GitHub Avatar"
									className="h-20 w-20 rounded-full border-4 border-blue-500/70 ring-4 ring-blue-500/10 shadow-[0_0_35px_rgba(59,130,246,.45)]"
								/>
							</a>

							<div>
								<h3 className="text-3xl font-bold">
									{user?.name ?? "Loading..."}
								</h3>

								<p className="text-gray-400">
									@{user?.login ?? "..."}
								</p>

								<a
									href={user?.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-600"
								>
									View Profile
									<ArrowUpRight size={18} />
								</a>
							</div>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-4">
							{[
								{
									value: user?.public_repos,
									label: "Repos",
								},
								{
									value: user?.followers,
									label: "Followers",
								},
								{
									value: user?.following,
									label: "Following",
								},
							].map((item, index) => (
								<div
									key={item.label}
									className="rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-black/30 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
								>
									<motion.p
										initial={{ opacity: 0, y: 12 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											delay: index * 0.15,
											duration: 0.4,
										}}
										className="text-3xl font-bold text-blue-400"
									>
										{item.value ?? 0}
									</motion.p>

									<p className="mt-1 text-sm text-gray-400">
										{item.label}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Divider */}
					<div className="my-8 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

					{/* Calendar */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-8 flex justify-center overflow-x-auto rounded-xl"
					>
						<GitHubCalendar
							username="adityapandey909"
							blockSize={15}
							blockMargin={5}
							fontSize={14}
							colorScheme="dark"
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default GitHub;